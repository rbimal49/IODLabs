// 4 functions for 4 mathematical operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
console.log(add(6, 3));
console.log(subtract(6, 3));
console.log(multiply(6, 3));
console.log(divide(6, 3));

// function that takes the name of person and prints "Hello <name>"

function greet(name) {
  console.log("Hello ".concat("", name));
}
greet("Joe");
