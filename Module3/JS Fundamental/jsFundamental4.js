/* Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do?*/

let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

// Rewriting to ternary/conditional operator '?'

let ternaryReult =
  a + b < 10 ? `${a} + ${b} is less than 10` : `${a} + ${b} is greater than 10`;

console.log(ternaryReult);

/* Testing the different value for a and b.

let a = 5,
b = 8,

the result will be "5 + 8 is greater than 10" */

/* What does the ‘+=’ do?
 Answer: It is operator that will is used for concatenating the values. */
