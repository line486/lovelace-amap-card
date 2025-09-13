import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/amap-card.js",
    format: "es",
  },
  plugins: [json(), typescript(), commonjs(), nodeResolve()],
};
