const today = new Date();

//a. Print the total number of minutes that have passed so far today:
console.log(
  today.getHours() * 60 +
    today.getMinutes() +
    " minutes have passed so far today."
);

//b. Print the total number of seconds that have passed so far today:
console.log(
  (today.getHours() * 60 + today.getMinutes()) * 60 +
    today.getSeconds() +
    " seconds have passed so far today."
);

//c. Calculate and print your age
const birthdate = new Date("1998-06-28");
const ageDate = new Date(today - birthdate);
const age = Math.abs(ageDate.getUTCFullYear() - 1970);

console.log(
  "I am " +
    age +
    " years, " +
    ageDate.getUTCMonth() +
    " months, and " +
    ageDate.getUTCDate() +
    " days old."
);

//d. Functions to that returs the amount of days in between two given dates.
function daysInBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return "The days between " + date1 + "and " + date2 + " is " + diffDays + ".";
}

// Example usage
console.log(daysInBetween("2024-01-01", "2024-01-10")); // Output: 9
