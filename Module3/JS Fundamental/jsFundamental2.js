let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; //     the value is 34
let multiplication = three * four; //the value is 12
let division = three / four; //     the value is 0.75
let subtraction = three - four; //   the value is -1
let lessThan1 = three < four; //    the value will be return as true
let lessThan2 = thirty < four; //   the value will be return as true.

/* The addition and lessThan2 are not giving the correct answer becuase "four" and "thirty" are defined as strings, not numbers. Java sript compares the string alphabetically ratherthan numerically.
To fix this, the string variable should be converted to numbers before comparing them. Example Number(three), Number(four) and number (thirty)
Example code is below.

let addition = Number(three) + Number(four);
let lessThan2 = Number(thirty) < Number(four);

*/
