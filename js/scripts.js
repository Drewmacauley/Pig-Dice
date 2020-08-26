//Business Logic for User Object
function AddPlayer (rollScore, turnScore, totalScore) {
  this.rollScore = rollScore,
  this.turnScore = turnScore,
  this.totalScore = totalScore;
}

AddPlayer.prototype.rollDice = function() {
  let rollValue = Math.floor(Math.random()* 6) + 1;
  alert(rollValue);
}

let player1 = new AddPlayer();
let player2 = new AddPlayer();
