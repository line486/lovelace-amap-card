import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "custom-card-helpers";
import AMapLoader from "@amap/amap-jsapi-loader";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { wgs84togcj02 } from "coordtransform";
import { AMapCardConfig, AMapTheme } from "./types";
import { getMapControls, getMapStyle } from "./utils";
import setupCustomLocalize from "./localize";
import { amapCardStyle } from "./styles";
import { AMAP_CONTROLS_POSE } from "./const";

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "amap-card",
  name: "AMap Card",
  description: "高德地图卡片。",
});

@customElement("amap-card")
export class AMapCard extends LitElement implements LovelaceCard {
  static styles = amapCardStyle();

  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() private _config!: AMapCardConfig;

  private map?: any;
  private _mapLoaded = false;

  setConfig(config: AMapCardConfig): void {
    this._config = config;
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement("amap-card-editor") as LovelaceCardEditor;
  }

  static getStubConfig(hass: HomeAssistant) {
    // Find a power entity for default
    const sampleEntities = Object.keys(hass.states).filter((entityId) => {
      const entity = hass.states[entityId];
      return (
        entity.state &&
        entity.attributes &&
        entity.attributes.latitude &&
        entity.attributes.longitude
      );
    });

    // Sample config
    return {
      entities: sampleEntities.slice(0, 1),
    };
  }

  getCardSize(): number {
    return 2;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadMap().then();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.map) {
      this.map.destroy();
      this.map = undefined;
      this._mapLoaded = false;
    }
  }

  protected firstUpdated() {
    if (!this._mapLoaded) {
      this._loadMap().then();
    }
  }

  protected updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    // 当配置变化时重新加载地图
    if (changedProperties.has("_config")) {
      console.log("[AMap Card] 配置已更新，重新加载地图");
      this._mapLoaded = false;
      if (this.map) {
        this.map.destroy();
        this.map = undefined;
      }
      // 延迟加载地图，确保 DOM 已更新
      setTimeout(() => {
        if (this._config && this._config.key && this._config.security) {
          this._loadMap().then();
        }
      }, 100);
    }
  }

  protected render() {
    if (!this.hass) {
      return html``;
    }

    const customLocalize = setupCustomLocalize(this.hass);
    if (!this._config) {
      return html`<ha-card>
        <ha-alert alert-type="error">${customLocalize("card.config_not_found")}</ha-alert>
      </ha-card>`;
    }
    if (!this._config.key || !this._config.security) {
      return html`<ha-card>
        <ha-alert alert-type="error">${customLocalize("card.Key_not_found")}</ha-alert>
      </ha-card>`;
    }

    return html`<ha-card class="amap-card"><div id="amap" tabindex="0"></div></ha-card>`;
  }

  private async _loadMap() {
    if (this._mapLoaded) return;

    if (!this._config.key || !this._config.security) {
      console.warn("No key or security key is configured for AMap");
      return;
    }

    (window as any)._AMapSecurityConfig = {
      securityJsCode: this._config.security,
    };

    try {
      const AMap = await AMapLoader.load({
        key: this._config.key,
        version: "2.0",
        plugins: getMapControls(this._config.controls) ?? [],
      });

      this.map = new AMap.Map(this.shadowRoot!.getElementById("amap")!, {
        pitch: this._config.pitch || 30, //地图俯仰角度，有效范围 0 度- 83 度
        viewMode: this._config.viewMode || "2D",
        zoom: this._config.zoom || 12,
        mapStyle: getMapStyle(this._getTheme()) ?? "amap://styles/normal",
        rotateEnable: true, //是否开启地图旋转交互 鼠标右键 + 鼠标画圈移动 或 键盘Ctrl + 鼠标左键画圈移动
        pitchEnable: true, //是否开启地图倾斜交互 鼠标右键 + 鼠标上下移动或键盘Ctrl + 鼠标左键上下移动
        center: [116.397428, 39.90923], //地图中心点
        // 性能优化配置
        WebGLParams: {
          preserveDrawingBuffer: false,
        },
      });

      // 添加控件
      if (this._config.controls.length > 0) {
        this._config.controls.forEach((control) => {
          this.map.addControl(new AMap[control](AMAP_CONTROLS_POSE[control] ?? {}));
        });
      }

      const fitView: any[] = [];

      console.log("[AMap Card] 配置信息:", {
        entities: this._config.entities,
        showHistory: this._config.showHistory,
        historyHours: this._config.historyHours,
        historyWidth: this._config.historyWidth,
      });

      // 如果开启了历史轨迹，先绘制轨迹
      if (this._config.showHistory) {
        console.log("[AMap Card] 显示历史轨迹已启用");
        await this._loadHistoryTracks(AMap, fitView);
      } else {
        console.log("[AMap Card] 显示历史轨迹未启用");
      }

      // 添加实体当前位置
      this._config.entities.forEach((entityId) => {
        const stateObj = this.hass!.states[entityId];
        if (stateObj && stateObj.attributes.latitude && stateObj.attributes.longitude) {
          const marker = this._createEntityMarker(AMap, stateObj, entityId);
          const circle = this._createEntityCircle(AMap, stateObj, entityId);

          this.map.add(marker);
          this.map.add(circle);
          fitView.push(circle);
        }
      });
      // 根据覆盖物范围调整视野
      this.map.setFitView(fitView);
      this._mapLoaded = true;
    } catch (e) {
      console.error("Failed to load AMap:", e);
    }
  }

  private async _loadHistoryTracks(AMap: any, fitView: any[]) {
    console.log("[AMap Card] 开始加载历史轨迹");
    const historyHours = this._config.historyHours || 24;
    const endTime = new Date();
    const startTime = new Date(endTime.getTime() - historyHours * 60 * 60 * 1000);

    console.log(
      `[AMap Card] 查询时间范围: ${startTime.toISOString()} 到 ${endTime.toISOString()} (${historyHours}小时)`
    );

    for (const entityId of this._config.entities) {
      const stateObj = this.hass!.states[entityId];
      if (!stateObj) {
        console.warn(`[AMap Card] 实体 ${entityId} 不存在`);
        continue;
      }

      console.log(`[AMap Card] 正在获取 ${entityId} 的历史数据...`);

      try {
        const historyData = await this._fetchHistoryData(entityId, startTime, endTime);
        console.log(`[AMap Card] ${entityId} 获取到 ${historyData.length} 条历史记录`);

        if (!historyData || historyData.length === 0) {
          console.warn(`[AMap Card] ${entityId} 没有历史数据`);
          continue;
        }

        // 输出历史位置数据
        console.log(`[AMap Card] ${entityId} 的历史位置数据:`, historyData);

        const path = this._processHistoryData(historyData);
        console.log(`[AMap Card] ${entityId} 处理后得到 ${path.length} 个有效路径点`, path);

        if (path.length < 2) {
          console.warn(`[AMap Card] ${entityId} 有效路径点不足，无法绘制轨迹`);
          continue;
        }

        // 使用默认颜色
        const color = "#1791fc";
        const width = this._config.historyWidth || 3;

        console.log(`[AMap Card] ${entityId} 绘制轨迹: 颜色=${color}, 宽度=${width}`);

        const polyline = new AMap.Polyline({
          path: path,
          strokeColor: color,
          strokeWeight: width,
          strokeOpacity: 0.8,
          lineJoin: "round",
          lineCap: "round",
        });

        this.map.add(polyline);
        fitView.push(polyline);
        console.log(`[AMap Card] ${entityId} 轨迹绘制完成`);
      } catch (error) {
        console.error(`[AMap Card] 加载 ${entityId} 的历史数据失败:`, error);
      }
    }
  }

  private async _fetchHistoryData(
    entityId: string,
    startTime: Date,
    endTime: Date
  ): Promise<any[]> {
    const startISO = startTime.toISOString();
    const endISO = endTime.toISOString();

    // 使用 Home Assistant 的 history API
    const path = `history/period/${startISO}?filter_entity_id=${entityId}&end_time=${endISO}`;

    console.log(`[AMap Card] 请求历史数据路径: ${path}`);

    try {
      const response = await (this.hass as any).callApi("GET", path);
      console.log(`[AMap Card] API 响应:`, response);

      if (Array.isArray(response) && response.length > 0) {
        return response[0] || [];
      }
      return [];
    } catch (error) {
      console.error(`[AMap Card] 获取 ${entityId} 历史数据失败:`, error);
      return [];
    }
  }

  private _processHistoryData(historyData: any[]): any[] {
    const path: [number, number][] = [];

    for (const state of historyData) {
      if (state.attributes && state.attributes.latitude && state.attributes.longitude) {
        const [gcjLng, gcjLat] = wgs84togcj02(
          state.attributes.longitude,
          state.attributes.latitude
        );
        if (gcjLng && gcjLat) {
          path.push([gcjLng, gcjLat]);
        } else {
          console.warn(`[AMap Card] 坐标转换失败:`, state);
        }
      }
    }

    console.log(`[AMap Card] 成功处理 ${path.length} 个坐标点`);
    return path;
  }

  private _createEntityMarker(AMap: any, stateObj: any, entityId: string) {
    const [gcjLng, gcjLat] = wgs84togcj02(
      stateObj.attributes.longitude,
      stateObj.attributes.latitude
    );

    const imgHtml = this._generateIconHtml(stateObj);
    const markerContent = `
      <div
        style="
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        ${imgHtml}
      </div>
    `;
    const marker = new AMap.Marker({
      position: [gcjLng, gcjLat],
      title: stateObj.attributes.friendly_name || entityId,
      content: markerContent,
      offset: new AMap.Pixel(-20, -20),
    });

    marker.on("click", () => {
      this._handleClick(entityId);
    });

    return marker;
  }

  private _createEntityCircle(AMap: any, stateObj: any, entityId: string) {
    const [gcjLng, gcjLat] = wgs84togcj02(
      stateObj.attributes.longitude,
      stateObj.attributes.latitude
    );

    const center = new AMap.LngLat(gcjLng, gcjLat);
    const radius = stateObj.attributes.radius || stateObj.attributes.gps_accuracy || 10;

    const circle = new AMap.Circle({
      center: center,
      radius: radius,
      borderWeight: 0,
      strokeColor: "#1791fc",
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillOpacity: 0.2,
      strokeDasharray: [10, 10],
      fillColor: "#1791fc",
      cursor: "pointer",
    });

    circle.on("click", () => {
      this._handleClick(entityId);
    });

    return circle;
  }

  // https://developers.home-assistant.io/blog/2023/07/07/action-event-custom-cards/
  private _handleClick(entityId: string) {
    const actionConfig = {
      entity: entityId,
      tap_action: {
        action: "more-info",
      },
    };
    const event = new CustomEvent("hass-action", {
      bubbles: true,
      composed: true,
      detail: {
        config: actionConfig,
        action: "tap",
      },
    });
    this.dispatchEvent(event);
  }

  private _generateIconHtml(stateObj: any) {
    let imgHtml = ` <ha-icon icon="mdi:map-marker-radius">icon</ha-icon> `;
    if (stateObj.attributes.entity_picture) {
      imgHtml = `
      <img
        src="${stateObj.attributes.entity_picture}"
        alt=""
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    `;
    } else if (stateObj.attributes.icon) {
      const attributes = stateObj.attributes;
      imgHtml = `
      <ha-icon icon="${attributes.icon}" 
        style="
        --icon-primary-color: ${attributes.color}; 
        --mdc-icon-size: ${attributes.size - 10}px;
        "
      >icon</ha-icon>
      `;
    }
    return imgHtml;
  }

  private _getTheme(): AMapTheme {
    // 判断是否自动，根据系统主题切换
    const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark ? this._config.darkTheme : this._config.lightTheme;
  }
}
