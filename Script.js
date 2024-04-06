var currentPlayer = 1;
var player1Score = 0;
var player2Score = 0;

// Function to generate a random number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice image and calculate the score
function updateDice() {
  var diceValue = rollDice();
  document.getElementById("dice" + currentPlayer).src =
    "dice" + diceValue + ".png";

  // Update score for the current player
  if (currentPlayer === 1) {
    player1Score += diceValue;
    document.getElementById("score1").innerText = player1Score;
    document.getElementById("score1Display").classList.add("score-highlight");
    document.getElementById("score2Display").classList.remove("score-highlight");
  } else {
    player2Score += diceValue;
    document.getElementById("score2").innerText = player2Score;
    document.getElementById("score2Display").classList.add("score-highlight");
    document.getElementById("score1Display").classList.remove("score-highlight");
  }

  return diceValue;
}

// Function to check for a winner
function checkWinner() {
  if (player1Score >= 15) {
    document.getElementById("rollButton").disabled = true;
    document.getElementById("gameWinner").innerText = "Player 1 wins the game!";
    document.getElementById("gameWinner").style.display = "block";
  } else if (player2Score >= 15) {
    document.getElementById("rollButton").disabled = true;
    document.getElementById("gameWinner").innerText = "Player 2 wins the game!";
    document.getElementById("gameWinner").style.display = "block";
  }
}

// Event listener for the roll button
document
  .getElementById("rollButton")
  .addEventListener("click", function () {
    var diceValue = updateDice();
    checkWinner();

    // Switch to the next player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  });
