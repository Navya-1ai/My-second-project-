let secretNumber;
let attemptsLeft;
let maxNumber;

function startGame(level) {
  if (level === 1) {
    maxNumber = 10;
    attemptsLeft = 5;
  } else if (level === 2) {
    maxNumber = 50;
    attemptsLeft = 7;
  } else {
    maxNumber = 100;
    attemptsLeft = 10;
  }

  secretNumber = Math.floor(Math.random() * maxNumber) + 1;

  document.getElementById("message").innerText =
    "Game Started! Guess a number between 1 and " + maxNumber;

  document.getElementById("info").innerText =
    "Attempts left: " + attemptsLeft;

  document.getElementById("gameArea").style.display = "block";
}

function checkGuess() {
  let userGuess = Number(document.getElementById("guess").value);

  if (!userGuess) {
    alert("Enter a number!");
    return;
  }

  attemptsLeft--;

  if (userGuess === secretNumber) {
    document.getElementById("message").innerText =
      "Correct! You won!";
    document.getElementById("gameArea").style.display = "none";
  } 
  else if (attemptsLeft === 0) {
    document.getElementById("message").innerText =
      "Game Over! The number was " + secretNumber;
    document.getElementById("gameArea").style.display = "none";
  } 
  else if (userGuess < secretNumber) {
    document.getElementById("message").innerText = "Too low!";
  } 
  else {
    document.getElementById("message").innerText = "Too high!";
  }

  document.getElementById("info").innerText =
    "Attempts left: " + attemptsLeft;
}
