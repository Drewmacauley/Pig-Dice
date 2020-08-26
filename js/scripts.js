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
  this.turnScore = 0;
  if (this.totalScore >= 100) {
    alert("Yay, somebody won");
  }
  return this.totalScore;
}


let player1 = new AddPlayer(0, 0, 0);
let player2 = new AddPlayer(0, 0, 0);


//User Interface Logic
$(document).ready(function(){

  $("#player1Roll").click(function(){
    let rollScore = player1.rollDice()
    $("#player1Dice").text(rollScore);
  })

  $("#player1Hold").click(function(){
    let totalScore = player1.countTotalScore();
    $("#player1Total").text(totalScore);
  })


  $("#player2Roll").click(function(){
    let rollScore = player2.rollDice()
    $("#player2Dice").text(rollScore);
  })
  
  $("#player2Hold").click(function(){
    let totalScore = player2.countTotalScore();
    $("#player2Total").text(totalScore);
  })

})