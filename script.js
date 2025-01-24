function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let choice = getRandomInt(3);
  if (choice === 0) {
    return "piedra";
  } else if (choice === 1) {
    return "papel";
  } else {
    return "tijeras";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  const results = document.querySelector('.result');
  const playerScores = document.querySelector('#player-score');
  const computerScores = document.querySelector('#computer-score');
  
  if (
    (humanChoice === "piedra" && computerChoice === "tijeras") ||
    (humanChoice === "tijeras" && computerChoice === "papel") ||
    (humanChoice === "papel" && computerChoice === "piedra")
  ) {
    humanScore++;
    playerScores.textContent = humanScore;
    results.textContent = "¡Ganaste! " + humanChoice + " le gana a " + computerChoice;
  } else if (humanChoice === computerChoice) {
    results.textContent = "¡Empate!";
  } else {
    computerScore++;
    computerScores.textContent = computerScore;
    results.textContent = "¡Perdiste " + computerChoice + " le gana a " + humanChoice;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id);
  }) 
})
