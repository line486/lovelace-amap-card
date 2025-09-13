import { AMAP_CONTROLS, AMAP_THEMES } from "./const";
import { LovelaceCardConfig } from "custom-card-helpers/dist/types";

export type AMapTheme = (typeof AMAP_THEMES)[number];

export type AMapControl = (typeof AMAP_CONTROLS)[number];

export interface AMapCardConfig extends LovelaceCardConfig {
  type: string;
  key: string;
  security: string;
  viewMode: "2D" | "3D";
  pitch: number;
  lightTheme: AMapTheme;
  darkTheme: AMapTheme;
  controls: AMapControl[];
  zoom: number;
  entities: [];
}
