// Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true");
if (-1) console.log("negative is true");
if (1) console.log("positive is true");

/* Answer: Following will be print.
"#2 zero is true" will be print becuase "0" is non-empty string. Considered as true in boolean.
"negative is true" will be print because "-1" is non-zero number even though its negative value. Considered as true in boolean.
"positive is true" will print becuase "1" is non-zero number even though its negative value. Considered as true in boolean.
*/
