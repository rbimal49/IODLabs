function camelCase(cssProp) {
  // Split the property by dashes
  const nameParts = cssProp.split("-");

  // Map through the parts of the array, capitalize all parts except the first
  const camelWord = nameParts
    .map((namePart, index) => {
      if (index === 0) {
        return namePart; // Return the first part unchanged
      }
      // Capitalize the first letter of subsequent parts
      return namePart.charAt(0).toUpperCase() + namePart.slice(1);
    })
    .join(""); // Join all parts into one string

  return camelWord;
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
