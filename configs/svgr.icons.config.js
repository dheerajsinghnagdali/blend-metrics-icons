const common = require("./svgr.common.config");

module.exports = {
  ...common,
  icon: "1.125rem",
  replaceAttrValues: {
    "#98A2B3": "currentColor"
  },
  outDir: "build/icons",
  template: require("./template")
};
