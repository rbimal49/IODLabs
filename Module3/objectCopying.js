const user = { name: "Elliont", age: 27 };
const userClone = {};
userClone.firstName = "will";
userClone["lastName"] = "Smith";

console.log(userClone);

for (let key in user) {
  // iterate over user properties
  userClone[key] = user[key]; // re-create them in userClone
}
console.log(userClone); // { name: 'Elliot', age: 27 }
