let fiveElements = ["Earth", "Water", "Fire", "Air", "Space"];

// replacing index 1 and index 4
fiveElements[1] = "Space";
fiveElements[4] = "Water";

//adding new element to the begining
fiveElements.unshift("Ether");

//removing the element at the end of the arry
let lastElement = fiveElements.pop();

//print the arry to the console
console.log(fiveElements);
