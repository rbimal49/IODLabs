let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
// a. The '.toFixed(2) method will convert the numerical values into strings formatted to two decimal places, so using the '+' operator between 'fixedTwenty' and 'fixedTen' will be concanate instead of numerical values.

// b. Function to add the two decimal numbers
function currencyAddition(float1, float2) {
  let fixedFloat1 = float1.toFixed(2);
  let fixedFloat2 = float2.toFixed(2);
  // Add the fixed-point strings as number and convert back to float
  let result = parseFloat(fixedFloat1) + parseFloat(fixedFloat2);

  //Return the result as a float
  return result;
}
// Example
let float1 = 0.5;
let float2 = 0.3;
console.log(currencyAddition(float1, float2));

// c. Function to operate as per operation given
function currencyOperation(float1, float2, operation) {
  let fixedFloat1 = parseFloat(float1.toFixed(2));
  let fixedFloat2 = parseFloat(float2.toFixed(2));
  let result;
  // Operation based on the the provided operator.
  switch (operation) {
    case "+":
      result = fixedFloat1 + fixedFloat2;
      break;
    case "-":
      result = fixedFloat1 - fixedFloat2;
      break;
    case "*":
      result = fixedFloat1 * fixedFloat2;
      break;
    case "/":
      result = fixedFloat1 / fixedFloat2;
      break;
    default:
      throw new Error("Invalid operation. Please use +, -, * or /.");
  }
  // return the result rounded to two decimal places as float
  return parseFloat(result.toFixed(2));
}
// Example

console.log(currencyOperation(0.1, 0.2, "+")); // Outputs: 0.3
console.log(currencyOperation(5, 2, "-")); // Outputs: 3.00
console.log(currencyOperation(1.5, 2, "*")); // Outputs: 3.00
console.log(currencyOperation(5, 2, "/")); // Outputs: 2.50
