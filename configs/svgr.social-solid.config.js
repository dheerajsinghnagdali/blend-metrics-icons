const common = require("./svgr.common.config");

module.exports = {
  ...common,
  icon: "1.5rem",
  replaceAttrValues: {
    "#667085": "currentColor"
  },
  outDir: "build/social-solid",
  template: require("./template")
};
