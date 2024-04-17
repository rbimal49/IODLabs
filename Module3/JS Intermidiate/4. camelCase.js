// a. Function change the dash to camelc ase ****
function camelCase(cssProperty) {
  // Splitting the property by dashes
  const parts = cssProperty.split("-");

  // Mapping the parts of the array, and capitalize all parts except the first
  const camelCased = parts
    .map((part, index) => {
      if (index === 0) {
        return part; // Return the first part unchanged
      }
      return part.charAt(0).toUpperCase() + part.slice(1); // Capitalize the first letter of subsequent parts
    })
    .join(""); // Join all parts into one string

  return camelCased;
}

// Example usage:
console.log(camelCase("margin-left")); // Outputs: marginLeft
console.log(camelCase("background-color")); // Outputs: backgroundColor

// b. Function with for loop ****
function camelCaseFor(cssProperty) {
  const parts = cssProperty.split("-");
  let result = parts[0];
  for (let i = 1; i < parts.length; i++) {
    result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
  }
  return result;
}
console.log(camelCaseFor("margin-right")); // Outputs: marginRight
console.log(camelCaseFor("background-size")); // Outputs: backgroundSize
console.log(camelCaseFor("padding-top")); // Outputs: paddingTop

// c. With and with out conditional operator *****
// with conditional Operator

function camelCaseWithConditionalOperator(cssProperty) {
  let parts = cssProperty.split("-");
  let camelCased = parts[0];

  for (let i = 1; i < parts.length; i++) {
    camelCased += parts[i]
      ? parts[i][0].toUpperCase() + parts[i].substring(1)
      : "";
  }

  return camelCased;
}

console.log(camelCaseWithConditionalOperator("background-image")); // Should output: backgroundImage
console.log(camelCaseWithConditionalOperator("justify-content")); // Should output: justifyContent

// without conditional Operator
function camelCaseWithoutConditionalOperator(cssProperty) {
  let parts = cssProperty.split("-");
  let camelCased = parts[0];
  parts.forEach((part, index) => {
    if (index > 0) {
      camelCased += part.charAt(0).toUpperCase() + part.substring(1);
    }
  });

  return camelCased;
}
console.log(camelCaseWithoutConditionalOperator("text-align")); // Outputs: marginRight
console.log(camelCaseWithoutConditionalOperator("self-align")); // Outputs: backgroundSize
