const common = require("./svgr.common.config");

module.exports = {
  ...common,
  outDir: "build/special",
  template: require("./template")
};
