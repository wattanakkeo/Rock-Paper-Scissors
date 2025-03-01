//Generates a random number between 1-100 for random selection
function random() {
  return parseInt((Math.random() * 100) + 1);
}

function computerChoice() {
  const randomInt = random();
  if (randomInt <= 33) {
    return "Rock"
  }
  else if (randomInt <= 66) {
    return "Paper"
  }
  else {
    return "Scissors"
  }
}

function userChoice(userInput) {
  if (userInput === 1) {
    return "Rock"
  }
  else if (userInput === 2) {
    return "Paper"
  }
  else if (userInput === 3) {
    return "Scissors"
  }
  else {
    return "Invalid selection"
  }
}

// The purpose of this function is to stop the game after a certain amount of wins and it
//  stays within the eventListener
function playRound(userChoice) {
  let playerWins = 0;
  let computerWins = 0;

  if (playerWins === 5 || computerWins === 5) {
    return;
  }
  

}

// choseRock, etc functions were created for buttons to interact with userChoice() funciton
let user = null;

function choseRock() {
  user = userChoice(1);
  playRound(user);
  console.log(user);
}

function chosePaper() {
  user = userChoice(2);
  playRound(user);
  console.log(user);
}

function choseScissors() {
  user = userChoice(3);
  playRound(user);
  console.log(user);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", choseRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", chosePaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", choseScissors);

// 1. Create buttons for when the user selects rock paper or scissors
// 2. Keep track of the score for the computer and the player stopping
//      stopping at whoever wins 5 first