import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "lib/index.ts",
  output: [
    {
      file: "dist/lib.js",
      format: "cjs",
    },
    // {
    //   file: "dist/lib.es.js",
    //   format: "es",
    // },
  ],
  plugins: [nodeResolve(), typescript()],
};
