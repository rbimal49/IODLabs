// Defining truncate function that takes string and the maximum lenthl
function truncate(str, max) {
  // Check if the current leanght is greather than the maximum allowed length
  if (str.length > max) {
    return str.substring(0, max - 3) + "...";
  }
  // If lenght is not too long, return the original string
  return str;
}

console.log(truncate("This text will be truncated if it is too long", 25)); // This text will be truncat...
