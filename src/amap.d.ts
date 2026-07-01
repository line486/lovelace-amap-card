/**
 * AMap JavaScript API v2 类型声明
 * 基于 https://lbs.amap.com/api/javascript-api-v2/summary
 */

declare namespace AMap {
  interface TileLayerOptions {
    zIndex?: number;
    opacity?: number;
    autoRefresh?: boolean;
    interval?: number;
    show?: boolean;
  }

  interface MapOptions {
    zoom?: number;
    center?: [number, number];
    viewMode?: "2D" | "3D";
    pitch?: number;
    mapStyle?: string;
    layers?: TileLayer[];
    features?: string[];
    rotateEnable?: boolean;
    pitchEnable?: boolean;
    WebGLParams?: {
      preserveDrawingBuffer?: boolean;
    };
  }

  interface MarkerOptions {
    position?: [number, number] | LngLat;
    title?: string;
    content?: string | HTMLElement;
    offset?: Pixel;
  }

  interface CircleOptions {
    center?: LngLat;
    radius?: number;
    borderWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    fillOpacity?: number;
    strokeDasharray?: number[];
    fillColor?: string;
    cursor?: string;
  }

  interface PolylineOptions {
    path?: Array<[number, number] | LngLat>;
    strokeColor?: string;
    strokeWeight?: number;
    strokeOpacity?: number;
    lineJoin?: string;
    lineCap?: string;
  }

  interface ControlOptions {
    position?: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
  }

  class TileLayer {
    constructor(options?: TileLayerOptions);
    static Satellite: typeof TileLayer;
    static RoadNet: typeof TileLayer;
    static Traffic: typeof TileLayer;
    show(): void;
    hide(): void;
  }

  class Map {
    constructor(el: string | HTMLElement, options?: MapOptions);
    add(overlay: Overlay | TileLayer | Array<Overlay | TileLayer>): void;
    remove(overlay: Overlay | TileLayer | Array<Overlay | TileLayer>): void;
    addControl(control: unknown): void;
    setFitView(overlays?: Overlay[]): void;
    setLayers(layers: TileLayer[]): void;
    getLayers(): TileLayer[];
    destroy(): void;
  }

  class Marker extends Overlay {
    constructor(options?: MarkerOptions);
    on(event: string, handler: () => void): void;
  }

  class Circle extends Overlay {
    constructor(options?: CircleOptions);
    on(event: string, handler: () => void): void;
  }

  class Polyline extends Overlay {
    constructor(options?: PolylineOptions);
  }

  class Pixel {
    constructor(x: number, y: number);
  }

  class LngLat {
    constructor(lng: number, lat: number);
  }

  class Overlay {}

  class ToolBar {
    constructor(options?: ControlOptions);
  }

  class Scale {
    constructor(options?: ControlOptions);
  }

  class ControlBar {
    constructor(options?: ControlOptions);
  }

  class Geolocation {
    constructor(options?: ControlOptions);
  }

  class HawkEye {
    constructor(options?: ControlOptions);
  }

  class MapType {
    constructor(options?: ControlOptions);
  }
}

interface AMapLoaderOptions {
  key: string;
  version: string;
  plugins?: string[];
}

declare const AMapLoader: {
  load(options: AMapLoaderOptions): Promise<typeof AMap>;
};

declare module "@amap/amap-jsapi-loader" {
  export default AMapLoader;
}
