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
  // returns empty dice if nothing is selected
  if (numberSelection === undefined) {
    return "";
  }
  // Test:
  const diceRoll = Math.floor(Math.random() * numberSelection + 1);
  if (diceRoll < 1) {
    throw new Error("Must select number greater than 0");
  }
  if (diceRoll > numberSelection) {
    throw new Error("Must select number less than 10 or test");
  }

  //Generates the random number between 0 and numberSelection, rounds to the nearest integer
  return diceRoll;
}

// Function that updates the HTML element with id "cube"
function updateValue() {
  //Set the inner HTML element with id "cube" to the value retruned byt the roll function
  document.getElementById("cube").innerHTML = rollDice();
  document.getElementById("cube").style.display = "block";
}

// Unit test started
