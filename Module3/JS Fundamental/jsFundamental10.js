/*The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    if (this.age >= 16) {
      return ", can drive.";
    } else {
      return ", is not old enouth to dirve.";
    }
  };
}

// a) Create a new person using the constructor function and store it in a variable
var person1 = new Person("Tom", 28);

//b) Create a second person using different name and age values and store it in a separate
var person2 = new Person("Hazel", 26);

//c) Print out the properties of each person object to the console
console.log(
  "Name: " +
    person1.name +
    ", Age: " +
    person1.age +
    ", Human: " +
    person1.human
);
console.log(
  "Name: " +
    person2.name +
    ", Age: " +
    person2.age +
    ", Human: " +
    person2.human
);

console.log(
  "Name: " + person1.name + ", Age: " + person1.age + person1.canDrive()
);

/* d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.*/
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
}
var person3 = new PersonClass("Rob", 30);
console.log(
  "Name: " +
    person3.name +
    ", Age: " +
    person3.age +
    ", Human: " +
    person3.human
);

/* e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.*/
//Part-1 Answer Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    if (this.age >= 16) {
      return ", can drive.";
    } else {
      return ", is not old enouth to dirve.";
    }
  };
}

console.log(
  "Name: " + person1.name + ", Age: " + person1.age + person1.canDrive()
);

//Part-2 Answer function as class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    if (this.age >= 16) {
      return ", can drive.";
    } else {
      return ", is not old enouth to dirve.";
    }
  }
}
console.log(
  "Name: " + person3.name + ", Age: " + person3.age + person3.canDrive()
);
