//require the express package
const express = require("express");

//create an app using the express
// package
const app1 = express(); // create an application 1
const app2 = express(); // create an application 2
const app3 = express(); // create an application 3
const app4 = express(); // create an application 4

// set the port
const port1 = 3000; // set the port for app1
const port2 = 3001; // set the port for app2
const port3 = 3002; // set the port for app3
const port4 = 3003; // set the port for app4

//Application1 running in port 3000
app1.get("/", (req, res) => {
  res.send("Hello World!");
});

app1.listen(port1, () => {
  console.log(`Example app listening at http://localhost:${port1}`);
});

//Application2 running in port 3001
app2.get("/greeting", (req, res) => {
  res.send("Kia Ora!");
});

app2.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`);
});

//Application2 running in port 3002
app3.get("/", (req, res) => {
  res.send("Wass up buddy!");
});

//Application3 running in port 3003
app3.listen(port3, () => {
  console.log(`Example app listening at http://localhost:${port3}`);
});

app4.get("/", (req, res) => {
  res.send("Nevermind!");
});

//Application4 running in port 3004
app3.listen(port4, () => {
  console.log(`Example app listening at http://localhost:${port4}`);
});
