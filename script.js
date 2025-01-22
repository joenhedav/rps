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

function getHumanChoice() {
  let choice = prompt(
    "Elige una opcion (piedra, papel, tijeras) ",
  ).toLowerCase();

  if (choice !== "piedra" && choice !== "papel" && choice !== "tijeras") {
    alert("Opción invalida, intente nuevamente");
    return getHumanChoice();
  } else {
    return choice;
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(
  humanChoice = getHumanChoice(),
  computerChoice = getComputerChoice(),
) {
  if (
    (humanChoice === "piedra" && computerChoice === "tijeras") ||
    (humanChoice === "tijeras" && computerChoice === "papel") ||
    (humanChoice === "papel" && computerChoice === "piedra")
  ) {
    humanScore++;
    return "¡Ganaste! " + humanChoice + " le gana a " + computerChoice;
  } else if (humanChoice === computerChoice) {
    return "¡Empate!";
  } else {
    computerScore++;
    return "¡Perdiste! " + computerChoice + " le gana a " + humanChoice;
  }
}

function playGame() {
  let result;
  for (let i = 1; i <= 5; i++) {
    console.log("Ronda n° " + i);
    result = playRound();
    console.log(result);
  }
  if (humanScore === computerScore) {
    console.log(`¡El juego terminó en empate! ${humanScore}:${computerScore}`);
  } else if (computerScore < humanScore) {
    console.log(`¡Ganaste el juego! ${humanScore}:${computerScore}`);
  } else {
    console.log(`¡Perdiste el juego! ${humanScore}:${computerScore}`);
  }
}
