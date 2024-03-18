function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let person1 = new Person("John", "Doe");
let person2 = new Person("Jane", "Smith");

console.log(person1.fullName()); // Outputs "John Doe"
console.log(person2.fullName()); // Outputs "Jane Smith"
