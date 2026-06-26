import { AMapControl, AMapTheme } from "./types";

export function getMapStyle(theme: AMapTheme) {
  return "amap://styles/" + theme;
}

export function getMapControls(controls: AMapControl[]) {
  return controls.map((control) => "AMap." + control);
}

/**
 * 从图片 URL 提取主题色（k-means 聚类，过滤黑白底色）
 * 优先级低于 entity_settings.color 和 attrs.color，作为自动降级方案
 */
export function extractPictureColor(url: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const SIZE = 100;
        const canvas = document.createElement("canvas");
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
          resolve(null);
          return;
        }
        ctx.drawImage(img, 0, 0, SIZE, SIZE);
        const data = ctx.getImageData(0, 0, SIZE, SIZE).data;

        const pixels: [number, number, number][] = [];
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i],
            g = data[i + 1],
            b = data[i + 2],
            a = data[i + 3];
          if (a < 128) continue;
          if (r + g + b < 60 || r + g + b > 700) continue;
          pixels.push([r, g, b]);
        }
        if (pixels.length < 10) {
          resolve(null);
          return;
        }

        const K = 5;
        const MAX_ITER = 10;
        const centroids = initCentroids(pixels, K);
        const assignments = new Uint8Array(pixels.length);

        for (let iter = 0; iter < MAX_ITER; iter++) {
          let changed = false;
          for (let i = 0; i < pixels.length; i++) {
            let minDist = Infinity,
              best = 0;
            for (let k = 0; k < K; k++) {
              const dr = pixels[i][0] - centroids[k][0];
              const dg = pixels[i][1] - centroids[k][1];
              const db = pixels[i][2] - centroids[k][2];
              const d = dr * dr + dg * dg + db * db;
              if (d < minDist) {
                minDist = d;
                best = k;
              }
            }
            if (assignments[i] !== best) {
              assignments[i] = best;
              changed = true;
            }
          }
          if (!changed) break;

          const sums: [number, number, number][] = Array.from({ length: K }, () => [0, 0, 0]);
          const counts = new Uint32Array(K);
          for (let i = 0; i < pixels.length; i++) {
            const k = assignments[i];
            sums[k][0] += pixels[i][0];
            sums[k][1] += pixels[i][1];
            sums[k][2] += pixels[i][2];
            counts[k]++;
          }
          for (let k = 0; k < K; k++) {
            if (counts[k] > 0) {
              centroids[k] = [
                sums[k][0] / counts[k],
                sums[k][1] / counts[k],
                sums[k][2] / counts[k],
              ];
            }
          }
        }

        const counts = new Uint32Array(K);
        for (const a of assignments) counts[a]++;
        let bestK = 0;
        for (let k = 1; k < K; k++) {
          if (counts[k] > counts[bestK]) bestK = k;
        }

        const c = centroids[bestK];
        const toHex = (v: number) =>
          Math.round(Math.max(0, Math.min(255, v)))
            .toString(16)
            .padStart(2, "0");
        resolve(`#${toHex(c[0])}${toHex(c[1])}${toHex(c[2])}`);
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

/** 直方图初始化 k-means 质心：将 RGB 空间量化到 4x4x4 桶，选频率最高的桶中心 */
function initCentroids(pixels: [number, number, number][], k: number): [number, number, number][] {
  const BUCKETS = 4;
  const STEP = 256 / BUCKETS;
  const hist = new Map<number, number>();
  for (const [r, g, b] of pixels) {
    const br = Math.min(BUCKETS - 1, (r / STEP) | 0);
    const bg = Math.min(BUCKETS - 1, (g / STEP) | 0);
    const bb = Math.min(BUCKETS - 1, (b / STEP) | 0);
    const key = (br << 16) | (bg << 8) | bb;
    hist.set(key, (hist.get(key) ?? 0) + 1);
  }
  return [...hist.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(
      ([key]) =>
        [
          ((key >> 16) & 0xff) * STEP + STEP / 2,
          ((key >> 8) & 0xff) * STEP + STEP / 2,
          (key & 0xff) * STEP + STEP / 2,
        ] as [number, number, number]
    );
}
