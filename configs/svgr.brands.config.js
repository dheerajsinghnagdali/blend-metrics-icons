const common = require("./svgr.common.config");

module.exports = {
  ...common,
  icon: "2rem",
  outDir: "build/brands",
  template: require("./template")
};
