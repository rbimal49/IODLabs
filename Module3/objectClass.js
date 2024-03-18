class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
let person1 = new Person("Bimal", "Rai", 27);
let person2 = new Person("Sabi", "Rai", 24);

console.log(`${person1.fullName()} is ${person1.age} years old.`);
console.log(`${person2.fullName()} is ${person2.age} years old.`);
