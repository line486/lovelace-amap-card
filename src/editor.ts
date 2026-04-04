import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { AMapCardConfig } from "./types";
import { AMAP_CONTROLS, AMAP_THEMES } from "./const";
import setupCustomLocalize from "./localize";

export const defaultConfig: AMapCardConfig = {
  key: "",
  type: "",
  security: "",
  lightTheme: "normal",
  darkTheme: "dark",
  controls: ["ToolBar"],
  viewMode: "2D",
  pitch: 30,
  zoom: 15,
  entities: [],
  showHistory: false,
  historyHours: 24,
  historyWidth: 3,
};

@customElement("amap-card-editor")
export class AMapCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: AMapCardConfig;
  private _isInitialized = false;

  setConfig(config: AMapCardConfig): void {
    if (!this._isInitialized) {
      // 初始化默认值，并确保 entities 是正确的格式
      this._config = {
        ...defaultConfig,
        ...config,
        // 兼容旧格式：如果是对象数组，提取 entity 字段
        entities: Array.isArray(config.entities)
          ? config.entities.map((e: any) => (typeof e === "string" ? e : e.entity))
          : [],
      };
      this._isInitialized = true;
    } else {
      // 确保更新时 entities 也是正确格式
      this._config = {
        ...config,
        entities: Array.isArray(config.entities)
          ? config.entities.map((e: any) => (typeof e === "string" ? e : e.entity))
          : [],
      };
    }
  }

  protected render() {
    if (!this.hass || !this._config) return html``;
    const customLocalize = setupCustomLocalize(this.hass);

    const schema: any[] = [
      {
        name: "key",
        selector: { text: { type: "password" } },
        required: true,
        label: customLocalize("editor.api.key"),
      },
      {
        name: "security",
        selector: { text: { type: "password" } },
        required: true,
        label: customLocalize("editor.api.security"),
      },
      {
        name: "lightTheme",
        type: "select",
        options: AMAP_THEMES.map((item) => [
          item,
          customLocalize("editor.appearance.theme.options." + item),
        ]),
        label: customLocalize("editor.appearance.theme.mode.light"),
      },
      {
        name: "darkTheme",
        type: "select",
        options: AMAP_THEMES.map((item) => [
          item,
          customLocalize("editor.appearance.theme.options." + item),
        ]),
        label: customLocalize("editor.appearance.theme.mode.dark"),
      },
      {
        name: "controls",
        type: "multi_select",
        options: AMAP_CONTROLS.reduce((acc: Record<string, string>, item) => {
          acc[item] = customLocalize("editor.appearance.control." + item);
          return acc;
        }, {}),
        label: customLocalize("editor.appearance.control.title"),
      },
      {
        name: "viewMode",
        selector: { select: { options: ["2D", "3D"] } },
        label: customLocalize("editor.appearance.viewMode"),
      },
      {
        name: "pitch",
        selector: {
          number: { min: 0, max: 83, step: 1, mode: "slider" },
        },
        label: customLocalize("editor.appearance.pitch"),
      },
      {
        name: "showHistory",
        selector: { boolean: {} },
        label: customLocalize("editor.history.showHistory"),
      },
      {
        name: "historyHours",
        selector: {
          number: { min: 1, max: 168, step: 1, mode: "slider" },
        },
        label: customLocalize("editor.history.hours"),
      },
      {
        name: "historyWidth",
        selector: {
          number: { min: 1, max: 10, step: 1, mode: "slider" },
        },
        label: customLocalize("editor.history.width"),
      },
      {
        name: "entities",
        selector: { entity: { multiple: true, domain: ["zone", "device_tracker", "person"] } },
        label: customLocalize("editor.entity"),
      },
    ];

    return html`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .schema=${schema}
          .data=${this._config}
          .computeLabel=${(schema: any) => schema.label}
          @value-changed=${this._handleValueChanged}
        ></ha-form>
      </div>
    `;
  }

  private _handleValueChanged(ev: CustomEvent) {
    this._config = ev.detail.value as AMapCardConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  }
}
