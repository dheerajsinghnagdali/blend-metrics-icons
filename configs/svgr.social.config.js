const common = require("./svgr.common.config");

module.exports = {
  ...common,
  icon: "1.5rem",
  outDir: "build/social",
  template: require("./template")
};
