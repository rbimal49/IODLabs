// ------ function to add two numbers and returns the result.------
function add(a, b) {
  return a + b;
}

// Unit test for the add function
if (add(6, 3) !== 9) {
  throw new Error("Test failed: 6 + 3 should be 9");
}
if (add(6, -3) !== 3) {
  throw new Error("Test failed: 6 + (-3) should be 3");
}
if (add(0, 0) !== 0) {
  throw new Error("Test failed: 0 + 0 should be 0");
}
console.log("All test for add function passed sucessfully");

// ------function to subtract two numbers and returns the result.------
function subtract(a, b) {
  return a - b;
}
//Unit test for the subtract fuchtion

if (subtract(6, 3) !== 3) {
  throw new Error("Test failed: 6 - 3 should be 3");
}
if (subtract(6, -3) !== 9) {
  throw new Error("Test failed: 6 - (-3) should be 9");
}
if (subtract(0, 0) !== 0) {
  throw new Error("Test failed: 0 - 0 should be 0");
}
console.log("All test for subtract function passed sucessfully");

// ------function to multiply two numbers and returns the result.------
function multiply(a, b) {
  return a * b;
}

//Unit test for the multiply fucntion
if (multiply(6, 3) !== 18) {
  throw new Error("Test failed: 6 * 3 should be 18");
}
if (multiply(6, -3) !== -18) {
  throw new Error("Test failed: 6 * (-3) should be -18");
}
if (multiply(0, 0) !== 0) {
  throw new Error("Test failed: 0 * 0 should be 0");
}
console.log("All test for multiply function passed sucessfully");

// ------function to divide two numbers------
function divide(a, b) {
  return a / b;
}
//Unit test for the divide fuchtion
if (divide(6, 3) !== 2) {
  throw new Error("Test failed: 6 / 3 should be 2");
}
if (divide(6, -3) !== -2) {
  throw new Error("Test failed: 6 / (-3) should be -2");
}
if (divide(0, 6) !== 0) {
  throw new Error("Test failed: 0 / 6 should be 0");
}
console.log("All test for divide function passed sucessfully");

// ------function that takes the name of person and prints "Hello <name>"------
function greet(name) {
  return `Hello ${name}`;
}

//Unit test for the greet function
console.log(greet("Joe") == "Hello Joe"); // Expected result on console: True
console.log(greet("World") == "Hello"); // Expected result on console: False
console.log(greet("Jill") == "Hello Joe"); // Expected result on console: False
