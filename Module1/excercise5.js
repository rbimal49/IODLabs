let fiveElements = ["Earth", "Water", "Fire", "Air", "Space"];

// replacing element of position 1 and 4
fiveElements[1] = "Watebender";
fiveElements[4] = "Airbender";

console.log(fiveElements);

//adding new element to the begining
fiveElements.unshift("Ether");

//removing the element at the end of the arry
let lastElement = fiveElements.pop();

//print the arry to the console
console.log(fiveElements);
