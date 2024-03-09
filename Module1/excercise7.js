// function to add two numbers and returns the result.
function add(a, b) {
  return a + b;
}

// Unit test for the add function
console.log(add(6, 3) == 9); // Expected result on console: True
console.log(add(6, -9) == 3); // Expected result on console: False
console.log(add(0, 0) == 0); // Expected result on console: True

// function to subtract two numbers and returns the result.
function subtract(a, b) {
  return a - b;
}
//Unit test for the subtract fuchtion
console.log(subtract(6, 3) == 3); // Expected result on console: True
console.log(subtract(6, 20) == -14); // Expected result on console: True
console.log(subtract(6, 6) == 0); // Expected result on console: True

// function to multiply two numbers and returns the result.
function multiply(a, b) {
  return a * b;
}

//Unit test for the multiply fuchtion
console.log(multiply(6, 3) == 19); // Expected result on console: False
console.log(multiply(6, -2) == -12); // Expected result on console: True
console.log(multiply(6, 0) == 0); // Expected result on console: True

// function to divide two numbers
function divide(a, b) {
  return a / b;
}

//Unit test for the divide fuchtion
console.log(divide(6, 3) == 2); // Expected result on console: True
console.log(divide(6, -2) == -2); // Expected result on console: True
console.log(divide(0, 6) == 0); // Expected result on console: True

// function that takes the name of person and prints "Hello <name>"
function greet(name) {
  return `Hello ${name}`;
}

//Unit test for the greet function
console.log(greet("Joe") == "Hello Joe"); // Expected result on console: True
console.log(greet("World") == "Hello"); // Expected result on console: False
console.log(greet("Jill") == "Hello Joe"); // Expected result on console: False
