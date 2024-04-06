const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    //a. `this` will allows the methods to be called one after another on the same object "basketballGame"
    return this;
  },
  basket() {
    this.score += 2;
    //a. `this` will allows the methods to be called one after another on the same object "basketballGame"
    return this;
  },
  threePointer() {
    this.score += 3;
    //a. `this` will allows the methods to be called one after another on the same object "basketballGame"
    return this;
  },
  halfTime() {
    console.log(
      // c. added foul count in the half time.
      "Halftime score is " + this.score + " with " + this.fouls + " fouls."
    );
    return this;
  },

  //b. new method fullTIme added to print the final score. Anwer(c). added foul count in the full time.
  fullTime() {
    console.log(
      "Fulltime score is " + this.score + " with " + this.fouls + " fouls."
    );
    return this;
  },
  //c. new object property foul added separate to the score.
  fouls: 0,
  foul() {
    this.fouls++;
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .halfTime()
  .foul()
  .freeThrow()
  .fullTime();
