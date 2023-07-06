import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/videojs-plugin-audio-switch.js",
    format: "es",
    globals: {
      "video.js": "videojs",
    },
    sourcemap: true,
  },
  plugins: [typescript(), nodeResolve()],
  external: ["video.js"],
};
