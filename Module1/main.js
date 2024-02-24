function helloWorld() {
  alert("Hey Wass up Man!");
  document.getElementById("demo").style.color = "red";
}

//color change on click

//function to change color of "Hello"
function hello() {
  document.getElementById("heading1").style.color = "red";
}

//function to change color of "World"
function world() {
  document.getElementById("heading2").style.color = "blue";
}

function calculation(a, b, c) {
  if (a == b) console.warn("a must not be equal to b");
  if (b == c) console.error("b must nerver be equal to c");
}