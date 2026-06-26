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
      bottom: "20px",
    },
  },
  Scale: null,
  ControlBar: {
    position: {
      right: "-14px",
      bottom: "114px",
    },
  },
  Geolocation: {
    position: {
      right: "16px",
      bottom: "90px",
    },
  },
  HawkEye: {
    position: {
      left: "0",
      top: "0",
    },
  },
  MapType: null,
};

/** 实体默认颜色 */
export const ENTITY_DEFAULT_COLOR = "#1791fc";

/** 统一默认配置 — 所有组件共享 */
export const DEFAULT_CONFIG = {
  key: "",
  type: "",
  security: "",
  lightTheme: "normal" as const,
  darkTheme: "dark" as const,
  controls: ["ToolBar"] as const,
  viewMode: "2D" as const,
  pitch: 30,
  zoom: 15,
  entities: [],
  showHistory: false,
  historyHours: 24,
  historyWidth: 3,
};
