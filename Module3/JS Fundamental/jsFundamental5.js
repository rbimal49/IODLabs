/* Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.*/
function getGreeting(name) {
  return "Hello " + name + "!";
}

// Answers
// a. funcaion expression syntax

const expressGreeting = function (name) {
  return "Hello " + name + "!";
};

//b. function arrow syntax
const arrowGreeting = (name) => {
  return "Hello " + name + "!";
};
