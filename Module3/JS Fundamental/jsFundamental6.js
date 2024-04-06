const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya", //a. Added lastName property
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; // a. lastName included in to greeting.
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers === 6) {
      //b. argument with 6 fingers has been added
      return "You killed my father. Prepare to die.";
    } else {
      return "Nice to meet you.";
    }
  },
};

// c. updated the getCatchPhrase to arrow function
const arrowGetCatchPharse = (person) =>
  person.numFingers === 6
    ? "You killed my father. Prepare to die."
    : "Nice to meet you.";
