const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let yourChoice;
let computerChoice;
let result;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    genereteComputerChoice();
    getResult();
  })
);

function genereteComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === yourChoice) {
    result = "Its draw";
  }
  if (computerChoice === "scissors" && yourChoice === "paper") {
    result = "You lost";
  }
  if (computerChoice === "rock" && yourChoice === "scissors") {
    result = "You lost";
  }
  if (computerChoice === "paper" && yourChoice === "rock") {
    result = "You lost";
  }
  if (computerChoice === "scissors" && yourChoice === "rock") {
    result = "You win";
  }
  if (computerChoice === "paper" && yourChoice === "scissors") {
    result = "You win";
  }
  if (computerChoice === "rock" && yourChoice === "paper") {
    result = "You win";
  }
  resultDisplay.innerHTML = result;
}
