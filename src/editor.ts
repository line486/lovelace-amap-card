import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { AMapCardConfig } from "./types";
import { AMAP_CONTROLS, AMAP_THEMES, DEFAULT_CONFIG } from "./const";
import setupCustomLocalize from "./localize";

@customElement("amap-card-editor")
export class AMapCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: AMapCardConfig;
  private _localize?: (key: string) => string;
  private _localizeHass?: HomeAssistant;

  /** 兼容旧格式：对象数组 → 字符串数组 */
  private _normalizeEntities(entities: unknown): string[] {
    if (!Array.isArray(entities)) return [];
    return entities.map((e: unknown) =>
      typeof e === "string" ? e : (e as { entity: string }).entity
    );
  }

  setConfig(config: AMapCardConfig): void {
    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      entities: this._normalizeEntities(config.entities),
    } as AMapCardConfig;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;

    // 仅当 hass 变化时重新创建 localize
    if (this._localizeHass !== this.hass) {
      this._localize = setupCustomLocalize(this.hass);
      this._localizeHass = this.hass;
    }
    const customLocalize = this._localize!;

    const schema: Record<string, unknown>[] = [
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
          .computeLabel=${(schema: Record<string, unknown>) => (schema as { label: string }).label}
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
