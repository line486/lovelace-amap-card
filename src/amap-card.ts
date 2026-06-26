import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "custom-card-helpers";
import AMapLoader from "@amap/amap-jsapi-loader";
import { wgs84togcj02 } from "coordtransform";
import { AMapCardConfig, AMapTheme } from "./types";
import { getMapControls, getMapStyle, extractPictureColor } from "./utils";
import setupCustomLocalize from "./localize";
import { amapCardStyle } from "./styles";
import { AMAP_CONTROLS_POSE, DEFAULT_CONFIG, ENTITY_DEFAULT_COLOR } from "./const";

// This puts your card into the UI card picker dialog
const _getCardInfo = () => {
  const browserLang = navigator.language;
  const isZh = browserLang.startsWith("zh");
  return {
    type: "amap-card",
    name: isZh ? "高德地图" : "AMap",
    description: isZh ? "在 Home Assistant 中显示高德地图。" : "Display AMap in Home Assistant.",
  };
};
window.customCards = window.customCards || [];
window.customCards.push(_getCardInfo());

@customElement("amap-card")
export class AMapCard extends LitElement implements LovelaceCard {
  static styles = amapCardStyle();

  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public editMode?: boolean;
  @property() private _config!: AMapCardConfig;

  private map?: AMap.Map;
  private _mapLoaded = false;
  private _mapGen = 0;
  private _reloadTimer?: ReturnType<typeof setTimeout>;
  private _localize?: (key: string) => string;
  private _localizeHass?: HomeAssistant;

  setConfig(config: AMapCardConfig): void {
    this._config = config;
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement("amap-card-editor") as LovelaceCardEditor;
  }

  static getStubConfig(hass: HomeAssistant) {
    const sampleEntities = Object.keys(hass.states).filter((entityId) => {
      const entity = hass.states[entityId];
      return (
        entity.state &&
        entity.attributes &&
        entity.attributes.latitude &&
        entity.attributes.longitude
      );
    });

    return {
      entities: sampleEntities.slice(0, 1),
    };
  }

  getCardSize(): number {
    return 5;
  }

  getGridOptions() {
    return {
      rows: 4,
      min_rows: 2,
    };
  }

  /**
   * 获取视图类型
   */
  private get _viewType(): string {
    let el = this.parentElement;
    while (el) {
      if (el.classList?.contains("masonry")) return "masonry";
      el = el.parentElement;
    }
    return "panel";
  }

  /**
   * 是否在配置弹窗的预览界面中
   */
  private get _isPreview(): boolean {
    return !!this.closest(".preview") || !!this.closest(".element-preview");
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadMap().catch(console.error);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._reloadTimer) {
      clearTimeout(this._reloadTimer);
      this._reloadTimer = undefined;
    }
    if (this.map) {
      this.map.destroy();
      this.map = undefined;
      this._mapLoaded = false;
    }
  }

  protected updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has("_config")) {
      if (this._reloadTimer) clearTimeout(this._reloadTimer);
      this._reloadTimer = setTimeout(() => {
        this._reloadTimer = undefined;
        this._mapLoaded = false;
        this._mapGen++;
        if (this.map) {
          this.map.destroy();
          this.map = undefined;
        }
        this._loadMap().catch(console.error);
      }, 300);
    }
  }

  protected render() {
    if (!this.hass) {
      return html``;
    }

    // 仅当 hass 变化时重新创建 localize
    if (this._localizeHass !== this.hass) {
      this._localize = setupCustomLocalize(this.hass);
      this._localizeHass = this.hass;
    }
    const customLocalize = this._localize!;

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

    return html`<ha-card class="amap-card">
      <div
        id="amapContainer"
        style=${this._isPreview && this._viewType !== "masonry" ? "padding-bottom: 100%;" : ""}
      >
        <div id="amap"></div>
      </div>
    </ha-card>`;
  }

  private async _loadMap() {
    if (!this._config?.key || !this._config.security) return;
    if (this._mapLoaded) return;

    // 记录本次加载的代次，await 后检查是否已被更新
    const gen = ++this._mapGen;

    if (this.map) {
      this.map.destroy();
      this.map = undefined;
    }

    window._AMapSecurityConfig = {
      securityJsCode: this._config.security,
    };

    try {
      const AMap = await AMapLoader.load({
        key: this._config.key,
        version: "2.0",
        plugins: getMapControls(this._config.controls) ?? [],
      });

      if (gen !== this._mapGen) return;

      const mapEl = this.shadowRoot?.getElementById("amap");
      if (!mapEl) return;

      this.map = new AMap.Map(mapEl, {
        pitch: this._config.pitch ?? DEFAULT_CONFIG.pitch,
        viewMode: this._config.viewMode ?? DEFAULT_CONFIG.viewMode,
        zoom: this._config.zoom ?? DEFAULT_CONFIG.zoom,
        mapStyle: getMapStyle(this._getTheme()) ?? "amap://styles/normal",
        rotateEnable: true,
        pitchEnable: true,
        center: [116.397428, 39.90923],
        WebGLParams: {
          preserveDrawingBuffer: false,
        },
      });

      if (!this.map) return;

      // 添加控件
      if (this._config.controls.length > 0) {
        this._config.controls.forEach((control) => {
          const Ctor = AMap[control];
          if (Ctor && this.map) {
            this.map.addControl(new Ctor(AMAP_CONTROLS_POSE[control] ?? {}));
          }
        });
      }

      const fitView: AMap.Overlay[] = [];

      if (this._config.showHistory) {
        await this._loadHistoryTracks(AMap, fitView, gen);
      }

      if (gen !== this._mapGen || !this.map) return;

      for (const entityId of this._config.entities) {
        if (gen !== this._mapGen || !this.map) return;
        const stateObj = this.hass?.states[entityId];
        if (stateObj && stateObj.attributes.latitude && stateObj.attributes.longitude) {
          const marker = this._createEntityMarker(AMap, stateObj, entityId);
          const circle = await this._createEntityCircle(AMap, stateObj, entityId);

          if (gen !== this._mapGen || !this.map) return;
          this.map.add(marker);
          this.map.add(circle);
          fitView.push(circle);
        }
      }
      this.map.setFitView(fitView);
      this._mapLoaded = true;
    } catch (e) {
      console.error("[AMap Card] 加载地图失败:", e);
    }
  }

  /**
   * 异步解析实体颜色：entity_settings.color → entity_picture主题色 → entity.attributes.color → 默认色
   */
  private async _resolveEntityColorAsync(
    entityId: string,
    attrs?: Record<string, unknown>
  ): Promise<string> {
    const setting = this._config.entity_settings?.[entityId]?.color;
    if (setting) return setting;

    const attrColor = attrs?.color as string | undefined;
    if (attrColor) return attrColor;

    const picture = attrs?.entity_picture as string | undefined;
    if (picture) {
      try {
        const color = await extractPictureColor(picture);
        if (color) return color;
      } catch {
        // 跨域图片无法读取像素时静默降级
      }
    }

    return ENTITY_DEFAULT_COLOR;
  }

  private async _loadHistoryTracks(AMapNS: typeof AMap, fitView: AMap.Overlay[], gen: number) {
    const historyHours = this._config.historyHours ?? DEFAULT_CONFIG.historyHours;
    const endTime = new Date();
    const startTime = new Date(endTime.getTime() - historyHours * 60 * 60 * 1000);

    for (const entityId of this._config.entities) {
      if (gen !== this._mapGen || !this.map) return;

      const settings = this._config.entity_settings?.[entityId];
      if (settings?.show_history === false) continue;

      const stateObj = this.hass?.states[entityId];
      if (!stateObj) continue;

      try {
        const historyData = await this._fetchHistoryData(entityId, startTime, endTime);

        if (gen !== this._mapGen || !this.map) return;
        if (!historyData || historyData.length === 0) continue;

        const path = this._processHistoryData(historyData);
        if (path.length < 2) continue;

        const color = await this._resolveEntityColorAsync(
          entityId,
          stateObj.attributes as Record<string, unknown>
        );
        const width = this._config.historyWidth ?? DEFAULT_CONFIG.historyWidth;

        const polyline = new AMapNS.Polyline({
          path: path,
          strokeColor: color,
          strokeWeight: width,
          strokeOpacity: 0.8,
          lineJoin: "round",
          lineCap: "round",
        });

        this.map.add(polyline);
        fitView.push(polyline);
      } catch (error) {
        console.error(`[AMap Card] 加载 ${entityId} 的历史数据失败:`, error);
      }
    }
  }

  private async _fetchHistoryData(
    entityId: string,
    startTime: Date,
    endTime: Date
  ): Promise<Record<string, unknown>[]> {
    const startISO = startTime.toISOString();
    const endISO = endTime.toISOString();

    const path = `history/period/${startISO}?filter_entity_id=${entityId}&end_time=${endISO}`;

    try {
      const response = await (this.hass as unknown as HomeAssistantWithApi).callApi("GET", path);

      if (Array.isArray(response) && response.length > 0) {
        return response[0] || [];
      }
      return [];
    } catch (error) {
      console.error(`[AMap Card] 获取 ${entityId} 历史数据失败:`, error);
      return [];
    }
  }

  private _processHistoryData(historyData: Record<string, unknown>[]): [number, number][] {
    const path: [number, number][] = [];

    for (const state of historyData) {
      const attrs = state.attributes as Record<string, unknown> | undefined;
      if (attrs && attrs.latitude && attrs.longitude) {
        const [gcjLng, gcjLat] = wgs84togcj02(attrs.longitude as number, attrs.latitude as number);
        if (Number.isFinite(gcjLng) && Number.isFinite(gcjLat)) {
          path.push([gcjLng, gcjLat]);
        }
      }
    }

    return path;
  }

  private _createEntityMarker(
    AMapNS: typeof AMap,
    stateObj: Record<string, unknown>,
    entityId: string
  ) {
    const attrs = stateObj.attributes as Record<string, unknown>;
    const [gcjLng, gcjLat] = wgs84togcj02(attrs.longitude as number, attrs.latitude as number);

    const imgHtml = this._generateIconHtml(attrs);
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
    const marker = new AMapNS.Marker({
      position: [gcjLng, gcjLat],
      title: (attrs.friendly_name as string) || entityId,
      content: markerContent,
      offset: new AMapNS.Pixel(-20, -20),
    });

    marker.on("click", () => {
      this._handleClick(entityId);
    });

    return marker;
  }

  private async _createEntityCircle(
    AMapNS: typeof AMap,
    stateObj: Record<string, unknown>,
    entityId: string
  ) {
    const attrs = stateObj.attributes as Record<string, unknown>;
    const [gcjLng, gcjLat] = wgs84togcj02(attrs.longitude as number, attrs.latitude as number);

    const center = new AMapNS.LngLat(gcjLng, gcjLat);
    const radius = (attrs.radius as number) || (attrs.gps_accuracy as number) || 10;

    const color = await this._resolveEntityColorAsync(entityId, attrs);

    const circle = new AMapNS.Circle({
      center: center,
      radius: radius,
      borderWeight: 0,
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillOpacity: 0.2,
      strokeDasharray: [10, 10],
      fillColor: color,
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

  private _generateIconHtml(attrs: Record<string, unknown>): string {
    let imgHtml = ` <ha-icon icon="mdi:map-marker-radius">icon</ha-icon> `;
    if (attrs.entity_picture) {
      imgHtml = `
      <img
        src="${attrs.entity_picture}"
        alt=""
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    `;
    } else if (attrs.icon) {
      imgHtml = `
      <ha-icon icon="${attrs.icon}"
        style="
        --icon-primary-color: ${attrs.color};
        --mdc-icon-size: ${(attrs.size as number) - 10}px;
        "
      >icon</ha-icon>
      `;
    }
    return imgHtml;
  }

  private _getTheme(): AMapTheme {
    const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark ? this._config.darkTheme : this._config.lightTheme;
  }
}
