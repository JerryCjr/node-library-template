import typescriptP from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
  },
  plugins: [typescriptP()],
};
