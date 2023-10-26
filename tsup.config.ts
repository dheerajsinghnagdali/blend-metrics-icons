import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "build/icons/index.ts",
    "build/social/index.ts",
    "build/social-solid/index.ts",
    "build/payment-methods/index.ts",
    "build/flags/index.ts",
    "build/brands/index.ts",
  ],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  outDir: "lib",
});
