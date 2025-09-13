import { AMapControl, AMapTheme } from "./types";

export function getMapStyle(theme: AMapTheme) {
  return "amap://styles/" + theme;
}

export function getMapControls(controls: AMapControl[]) {
  return controls.map((control) => "AMap." + control);
}
