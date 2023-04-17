const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let yourChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === yourChoice) {
    result = "It is a tie!";
  }
  if (computerChoice === "rock" && yourChoice === "paper") {
    result = "Woah, you won!";
  }
  if (computerChoice === "rock" && yourChoice === "scissors") {
    result = "Bummer. Try Again!";
  }
  if (computerChoice === "paper" && yourChoice === "scissors") {
    result = "Woah, way to go! You won.";
  }
  if (computerChoice === "paper" && yourChoice === "rock") {
    result = "Shoot, you lost.";
  }
  if (computerChoice === "scissors" && yourChoice === "rock") {
    result = "You CRUSHED it!";
  }
  if (computerChoice === "scissors" && yourChoice === "paper") {
    result = "You lost. Looks like you are not CUT out for this game.";
  }
  resultDisplay.innerHTML = result;
}
