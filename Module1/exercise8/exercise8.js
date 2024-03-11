// Function that generates a random number from user's input
function rollDice() {
  let numberSelection = parseInt(document.getElementById("userInput").value); // Variable numberSelection will get the users's iput from HTML element with the id "userinput"
  return Math.round(Math.random() * numberSelection); //Generates the random number between 0 and numberSelection, rounds to the nearest integer
}

// Function that updates the HTML element with id "cube"
function updateValue() {
  document.getElementById("cube").innerHTML = rollDice(); //Set the inner HTML element with id "cube" to the value retruned byt the roll function
}

//unit testing by printing in console
console.log(updateValue(6));
