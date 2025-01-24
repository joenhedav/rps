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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  const results = document.querySelector(".result");
  const playerScores = document.querySelector("#player-score");
  const computerScores = document.querySelector("#computer-score");
  const finalResult = document.querySelector(".final-result");

  if (
    (humanChoice === "piedra" && computerChoice === "tijeras") ||
    (humanChoice === "tijeras" && computerChoice === "papel") ||
    (humanChoice === "papel" && computerChoice === "piedra")
  ) {
    humanScore++;
    playerScores.textContent = humanScore;
    results.textContent =
      "¡Ganaste! " + humanChoice + " le gana a " + computerChoice;
  } else if (humanChoice === computerChoice) {
    results.textContent = "¡Empate!";
  } else {
    computerScore++;
    computerScores.textContent = computerScore;
    results.textContent =
      "¡Perdiste! " + computerChoice + " le gana a " + humanChoice;
  }

  if (humanScore == 5 || computerScore == 5) {
    if (humanScore == 5) {
      finalResult.textContent = "¡Ganaste la partida!";
    } else {
      finalResult.textContent = "¡Perdiste la partida!";
    }

    buttons.forEach((button) => {
      button.disabled = true;
    });

    setTimeout(reset, 3000);
  }
}

function reset() {
  humanScore = 0;
  computerScore = 0;
  document.querySelector("#player-score").textContent = humanScore;
  document.querySelector("#computer-score").textContent = computerScore;
  document.querySelector(".result").textContent = "";
  document.querySelector(".final-result").textContent = "";

  buttons.forEach((button) => {
    button.disabled = false;
  });
}
