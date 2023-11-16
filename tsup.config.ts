import { defineConfig } from "tsup";

const config = defineConfig({
  format: ["cjs", "esm"],
  dts: true,
  entry: {
    "payment-methods": "build/payment-methods/index.ts",
    flags: "build/flags/index.ts",
    icons: "build/icons/index.ts",
    social: "build/social/index.ts",
    "social-solid": "build/social-solid/index.ts",
    brands: "build/brands/index.ts",
    special: "build/special/index.ts",
    marketeq: "build/marketeq/index.ts"
  }
});

export default config;
