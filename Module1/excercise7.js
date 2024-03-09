// function to add two numbers and returns the result.
function add(a, b) {
  return a + b;
}

// Unit test for the add function
console.log(add(6, 3)); // Expected total:9 / Result:9
console.log(add(6, -9)); // Expected negative number: -3 / Result: -3
console.log(add(0, 0)); // Expected number: 0 / Result: 0

// function to subtract two numbers and returns the result.
function subtract(a, b) {
  return a - b;
}
//Unit test for the subtract fuchtion
console.log(subtract(6, 3)); //Expected reuslt: 3 / Result: 3
console.log(subtract(6, 20)); // Expected negative number: -14 / Result: -14
console.log(subtract(0, 0)); // Expected number: 0 / Result: 0

// function to multiply two numbers and returns the result.
function multiply(a, b) {
  return a * b;
}

//Unit test for the multiply fuchtion
console.log(multiply(6, 3)); //Expected reuslt: 18 / Result: 18
console.log(multiply(6, -2)); // Expected negative number: -12 / Result: -12
console.log(multiply(6, 0)); // Expected number: 0 / Result: 0

// function to divide two numbers
function divide(a, b) {
  return a / b;
}

//Unit test for the divide fuchtion
console.log(divide(6, 3)); //Expected reuslt: 2 / Result: 2
console.log(divide(6, -2)); // Expected negative number: -3 / Result: -3
console.log(divide(6, 0)); // Expected number: infinity / Result: infinity

// function that takes the name of person and prints "Hello <name>"

function greet(name) {
  console.log("Hello ".concat("", name));
}

//Unit test for the greet function
greet("Joe"); //Expected result: Hello Joe / Result: Hello Joe
greet(""); //Expected result: Hello / Result: Hello
greet("Jill"); ///Expected result: Hello Jill / Result: Hello Jill
