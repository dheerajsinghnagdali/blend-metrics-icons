const common = require("./svgr.common.config");

module.exports = {
  ...common,
  outDir: "build/payment-methods",
  template: require("./template"),
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      }
    ]
  }
};
