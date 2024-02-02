// eslint-disable-next-line node/no-unpublished-import
import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./build",
  target: "node",
  external: ["axios", "zod"],
  plugins: [dts()],
});
