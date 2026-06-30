import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { AMapCardConfig, EntityConfig } from "./types";
import { AMAP_CONTROLS, AMAP_THEMES, DEFAULT_CONFIG, ENTITY_DEFAULT_COLOR } from "./const";
import setupCustomLocalize from "./localize";
import { extractPictureColor } from "./utils";

@customElement("amap-card-editor")
export class AMapCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: AMapCardConfig;
  private _localize?: (key: string) => string;
  private _localizeHass?: HomeAssistant;
  private _pictureColors: Record<string, string> = {};

  static styles = css`
    .entity-settings {
      margin-top: 12px;
    }
    .entity-settings-title {
      font-size: 14px;
      font-weight: 500;
      padding: 4px 0;
    }
    .entity-settings-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
      gap: 8px;
    }
    .entity-settings-label {
      font-size: 14px;
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .entity-settings-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }
    .color-swatch {
      position: relative;
      width: 24px;
      height: 24px;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      flex-shrink: 0;
    }
    .color-swatch input[type="color"] {
      position: absolute;
      inset: -6px;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border: none;
      padding: 0;
      cursor: pointer;
      background: transparent;
    }
    .color-swatch input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    .color-swatch input[type="color"]::-webkit-color-swatch {
      border: none;
    }
  `;

  setConfig(config: AMapCardConfig): void {
    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      entities: Array.isArray(config.entities) ? config.entities : [],
    } as AMapCardConfig;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;

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
      ...(this._config.viewMode === "3D"
        ? [
            {
              name: "pitch",
              selector: {
                number: { min: 0, max: 83, step: 1, mode: "slider" },
              },
              label: customLocalize("editor.appearance.pitch"),
            },
          ]
        : []),
      {
        name: "rotateEnable",
        selector: { boolean: {} },
        label: customLocalize("editor.appearance.rotateEnable"),
      },
      {
        name: "showHistory",
        selector: { boolean: {} },
        label: customLocalize("editor.history.showHistory"),
      },
      ...(this._config.showHistory
        ? [
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
          ]
        : []),
      {
        name: "entities",
        selector: { entity: { multiple: true, domain: ["zone", "device_tracker", "person"] } },
        label: customLocalize("editor.entity"),
      },
    ];

    const renderEntitySettings = () => {
      if (!this._config?.showHistory || !this._config.entities?.length) return html``;
      const settings = this._config.entity_settings ?? {};
      return html`
        <div class="entity-settings">
          <div class="entity-settings-title">
            ${customLocalize("editor.history.entitySettings")}
          </div>
          ${this._config.entities.map((entityId) => {
            const s = settings[entityId] ?? {};
            const showHistory = s.show_history ?? true;
            const hasCustomColor = s.color != null;
            const stateObj = this.hass?.states?.[entityId];
            const attrs = stateObj?.attributes as Record<string, unknown> | undefined;
            const color =
              s.color ??
              (attrs?.color as string) ??
              this._getPictureColor(entityId, attrs) ??
              ENTITY_DEFAULT_COLOR;
            const name = (attrs?.friendly_name as string) ?? entityId;
            return html`
              <div class="entity-settings-row">
                <span class="entity-settings-label">${name}</span>
                <div class="entity-settings-controls">
                  ${showHistory
                    ? html`
                        ${hasCustomColor
                          ? html`
                              <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                style="cursor: pointer; fill: var(--primary-text-color);"
                                @click=${() => this._resetEntityColor(entityId)}
                              >
                                <path
                                  d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
                                />
                              </svg>
                            `
                          : ""}
                        <div class="color-swatch" style="background-color: ${color}">
                          <input
                            type="color"
                            .value=${color}
                            @input=${(ev: Event) =>
                              this._updateEntitySetting(
                                entityId,
                                "color",
                                (ev.target as HTMLInputElement).value
                              )}
                          />
                        </div>
                      `
                    : ""}
                  <ha-switch
                    .checked=${showHistory}
                    @change=${(ev: Event) =>
                      this._updateEntitySetting(
                        entityId,
                        "show_history",
                        (ev.target as HTMLInputElement).checked
                      )}
                  ></ha-switch>
                </div>
              </div>
            `;
          })}
        </div>
      `;
    };

    return html`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .schema=${schema}
          .data=${this._config}
          .computeLabel=${(schema: Record<string, unknown>) => (schema as { label: string }).label}
          @value-changed=${this._handleValueChanged}
        ></ha-form>
        ${renderEntitySettings()}
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

  /**
   * 获取 entity_picture 主题色（异步提取，缓存结果）
   */
  private _getPictureColor(entityId: string, attrs?: Record<string, unknown>): string | null {
    if (this._pictureColors[entityId] != null) return this._pictureColors[entityId];
    const picture = attrs?.entity_picture as string | undefined;
    if (!picture) return null;
    extractPictureColor(picture).then((color) => {
      if (color) {
        this._pictureColors = { ...this._pictureColors, [entityId]: color };
        this.requestUpdate();
      }
    });
    return null;
  }

  private _resetEntityColor(entityId: string) {
    if (!this._config) return;
    const entity_settings = { ...(this._config.entity_settings ?? {}) };
    const current = { ...(entity_settings[entityId] ?? {}) };
    delete current.color;
    entity_settings[entityId] = current;
    this._config = { ...this._config, entity_settings };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  }

  private _updateEntitySetting(entityId: string, key: keyof EntityConfig, value: boolean | string) {
    if (!this._config) return;
    const entity_settings = { ...(this._config.entity_settings ?? {}) };
    const current = { ...(entity_settings[entityId] ?? {}) };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (current as any)[key] = value;
    entity_settings[entityId] = current;
    this._config = { ...this._config, entity_settings };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  }
}
