// // Function that generates a random number from user's input
function rollDice() {
  const numberSelection = parseInt(document.getElementById("userInput").value); // Variable numberSelection will get the users's iput from HTML element with the id "userinput"
  return Math.round(Math.random() * numberSelection); //Generates the random number between 0 and numberSelection, rounds to the nearest integer
}

// Function that updates the HTML element with id "cube"
function updateValue() {
  //Set the inner HTML element with id "cube" to the value retruned byt the roll function
  document.getElementById("cube").innerHTML = rollDice();
  document.getElementById("cube").style.display = "block";
}

//unit testing by printing in console
// console.log(updateValue(6));
