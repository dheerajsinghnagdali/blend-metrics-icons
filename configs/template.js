const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

export default function ${
    variables.componentName.startsWith("Svg")
      ? variables.componentName.slice(3)
      : variables.componentName
  }(${variables.props}) {
  return ${variables.jsx};
}
`;
};

module.exports = template;
