function getRandomChoice() {
  const max = 3;
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let choice = getRandomChoice();
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter a choice (rock, paper, scissors) ").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("¡Invalid choice!, please try again.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  console.log("Your choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("¡You win!, " + humanChoice + " beats " + computerChoice);
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("¡It's a tie!");
  } else {
    console.log("¡You lose!, " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

function playGame() {
  let totalHumanScore = 0;
  let totalComputerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log("Round n° " + i);
    playRound(getHumanChoice(), getComputerChoice());
  }

  totalHumanScore += humanScore;
  totalComputerScore += computerScore;

  if (totalHumanScore > totalComputerScore) {
    console.log(
      "¡You win the game! " + totalHumanScore + ":" + totalComputerScore,
    );
  } else if (totalComputerScore > totalHumanScore) {
    console.log(
      "¡You lose the game! " + totalComputerScore + ":" + totalHumanScore,
    );
  } else {
    console.log("¡Tied game! " + totalHumanScore + ":" + totalComputerScore);
  }
}

let humanScore = 0;
let computerScore = 0;

playGame();
