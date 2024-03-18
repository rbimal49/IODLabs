let person = {
  firstName: "John",
  lastName: "Doe",
  age: 26,
  city: "Auckland",
  interest: "code",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // Outputs "John Doe"
console.log(
  `${person.fullName()} is ${person.age} years old who lives in ${
    person.city
  }. He likes to ${person.interest} programming.`
);