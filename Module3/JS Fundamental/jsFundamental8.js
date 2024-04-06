/*The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.*/

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia / Sydney",
};

//a function that takes an object as an argument

function printPropertisOfCity(city) {
  for (let prop in city) {
    console.log(`${prop}:${city[prop]}`);
  }
}
printPropertisOfCity(sydney);

//b.  new object for a different city with different properties
const auckland = {
  name: "Auckland",
  population: 1_657_000,
  state: "AKL",
  founded: "18 December 1840",
  timezone: "New Zealand / Auckland",
};
printPropertisOfCity(auckland);
