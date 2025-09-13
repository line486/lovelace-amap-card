export const AMAP_THEMES = [
  "normal", // 标准
  "dark", // 幻影黑
  "light", // 月光银
  "whitesmoke", // 远山黛
  "fresh", // 草色青
  "grey", // 雅士灰
  "graffiti", // 涂鸦
  "macaron", // 马卡龙
  "blue", // 靛青蓝
  "darkblue", // 极夜蓝
  "wine", // 酱籽
] as const;

export const AMAP_CONTROLS = [
  "ToolBar", // 缩放控件
  "Scale", // 比例尺控件
  "ControlBar", // 控制罗盘控件
  "Geolocation", // 定位控件
  "HawkEye", // 鹰眼控件
  "MapType", // 图层切换控件
] as const;

export const AMAP_CONTROLS_POSE = {
  ToolBar: {
    position: {
      right: "16px",
      bottom: "50px",
    },
  },
  Scale: null,
  ControlBar: null,
  Geolocation: null,
  HawkEye: null,
  MapType: null,
};
