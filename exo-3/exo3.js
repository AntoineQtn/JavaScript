// you can write js here

var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

function getPlayerChoice(playerInput) {
  playerInput = playerInput.toLowerCase();

  if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
    return playerInput;
  }
  else { return null; }
}

var randomInt = Math.floor(Math.random() * 3);

function getComputerChoice() {

  if (randomInt === 0) {
    return "rock";
  }
  else if (randomInt === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tied";
  }
  else if (
    (playerChoice === rock && computerChoice === scissors) ||
    (playerChoice === paper && computerChoice === rock) ||
    (playerChoice === scissors && computerChoice === paper)
  ) {
    return "won";
  } else {
    return "lost";
  }
}

function playGame() {
  var uChoice = getPlayerChoice(playerInput);
  console.log("Your choice " + uChoice);

  var computerChoice = getComputerChoice();
  console.log("Computer's choice " + computerChoice);

  var result = findWinner(uChoice, computerChoice);
  console.log("Result: " + result);
  alert(result);
}

playGame();