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
    let rollScore1 = player1.rollDice()
    $("#p1RollMsg").show();
    $("#player1Dice").text(rollScore1);
    $("#player1Total").text(player1.turnScore)
    if(rollScore1 === 1) {
      $(".player1Buttons").hide();
      $(".player2Buttons").show();
      $(".notP1Turn").show();
      $(".notP2Turn").hide();

    }
  })

  $("#player1Hold").click(function(){
    let totalScore1 = player1.countTotalScore();
    $("#player1Total").text(totalScore1);
    $(".player1Buttons").hide();
    $(".player2Buttons").show();
    $(".notP1Turn").show();
    $(".notP2Turn").hide();
  })


  $("#player2Roll").click(function(){
    let rollScore2 = player2.rollDice()
    $("#p2RollMsg").show();
    $("#player2Dice").text(rollScore2);
    $("#player2Total").text(player2.turn);
    if(rollScore2 === 1) {
      $(".player2Buttons").hide();
      $(".player1Buttons").show();
      $(".notP2Turn").show();
      $(".notP1Turn").hide();
    }
  })

  $("#player2Hold").click(function(){
    let totalScore2 = player2.countTotalScore();
    $("#player2Total").text(totalScore2);
    $(".player2Buttons").hide();
    $(".player1Buttons").show();
    $(".notP1Turn").hide();
    $(".notP2Turn").show();
  })

})