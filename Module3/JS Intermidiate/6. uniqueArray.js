//Function to return unique value
function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

//Test arrays
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const favouriteFruit = [
  "Mango",
  "Organg",
  "Apple",
  "Apple",
  "Kiwi",
  "Plum",
  "Mango",
];

// testing the function in the aarays
console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(favouriteFruit)); //[ 'Mango', 'Organg', 'Apple', 'Kiwi', 'Plum' ]
