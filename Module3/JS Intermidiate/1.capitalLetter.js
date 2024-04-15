// Define a function named FirstLetters that accepts a string parameter called str.
function ucFirstLetters(str) {
  // Split the input string into an array of words based on spaces.
  return (
    str
      .split(" ")
      // For each word, capitalize the first character and concatenate with the rest of the word.
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      // Join all the processed words back into a single string with spaces.
      .join(" ")
  );
}

console.log(ucFirstLetters("los angeles")); //Los Angeles
console.log(ucFirstLetters("new Zealand")); //New Zealand
console.log(ucFirstLetters("united states of America")); //United States of America
