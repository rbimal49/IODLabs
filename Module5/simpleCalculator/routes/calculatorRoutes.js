const express = require("express");

const router = express.Router();

router.get("/Add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });

  res.send("Hellow World!!");
});

module.exports = router;
