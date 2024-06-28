const express = require("express");
const app = express();

const myroutes = require("./routes/calculatorRoutes");

const port = 3000;

app.use("/calculator", myroutes);

app.listen(port, () => {
  console.log(`Server app running
at http://localhost:${port}`);
});
