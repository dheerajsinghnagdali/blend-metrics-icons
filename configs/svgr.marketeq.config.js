const common = require("./svgr.common.config");

module.exports = {
  ...common,
  icon: "3.125rem",
  outDir: "build/marketeq",
  template: require("./template")
};
