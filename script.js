function getRandomChoice() {
  const max = 3;
  return Math.floor(Math.random() * max);
}

function getComputerChoice(choice) {
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let computerRandomChoice = getRandomChoice();

console.log(getComputerChoice(computerRandomChoice));
