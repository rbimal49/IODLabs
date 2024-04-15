const animals = ["Tiger", "Giraffe"];
//Add 2 new values to the end
animals.push("Lion", "Elephant");
//Add 2 new values to the beginning
animals.unshift("Deer", "Donkey");
//Sort the values alphabetically
function sortAlpha() {
  return animals.sort;
}

// sorting the array alphabetical order
sortAlpha();

// Function to replace the middle value of the array
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal("Goat");

console.log(animals);

// Function to find matching animals
// Defining function that takes the parameter begining letter
function findMatchingAnimals(beginsWith) {
  // changing the letter to lower case
  let normalWords = beginsWith.toLowerCase();
  //  Filter the animals array for entries that start with the normalized search term
  let matchingAnimals = animals.filter((animal) =>
    animal.toLocaleLowerCase().startsWith(normalWords)
  );
  return matchingAnimals;
}
console.log(findMatchingAnimals("d"));
