// Function that generates a random number from user's input
function rollDice() {
  // empty variable declared
  let numberSelection;

  // Variable declared to store the selection made by user
  const sixRadio = document.getElementById("sixRadio");
  const tenRadio = document.getElementById("tenRadio");

  // assigning the value of variable sixRadio and tenRadio based on user's choice
  if (sixRadio.checked) {
    numberSelection = 6;
  }
  if (tenRadio.checked) {
    numberSelection = 10;
  }

  //Generates the random number between 0 and numberSelection, rounds to the nearest integer
  return Math.round(Math.random() * numberSelection);
}

// Function that updates the HTML element with id "cube"
function updateValue() {
  //Set the inner HTML element with id "cube" to the value retruned byt the roll function
  document.getElementById("cube").innerHTML = rollDice();
  document.getElementById("cube").style.display = "block";
}
