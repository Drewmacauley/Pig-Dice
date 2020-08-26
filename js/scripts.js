//Business Logic for User Object
function AddPlayer (rollScore, turnScore, totalScore) {
  this.rollScore = rollScore,
  this.turnScore = turnScore,
  this.totalScore = totalScore;
}

AddPlayer.prototype.rollDice = function() {
  let rollScore = Math.floor(Math.random()* 6) + 1;
  if (rollScore === 1) {
    this.turnScore = 0; 
  } else {
    this.turnScore += rollScore;
  }
  return rollScore;
}

AddPlayer.prototype.countTotalScore = function () {
  this.totalScore += this.turnScore;
  if (this.totalScore >= 100) {
    alert("Yay, somebody won");
  }
}


let player1 = new AddPlayer();
let player2 = new AddPlayer();
