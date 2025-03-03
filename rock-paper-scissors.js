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

// The purpose of this function is to stop the game after a certain amount of wins and it
//  stays within the eventListener
let userWins = 0;
let computerWins = 0;

function playRound(userChoice) {
  let computer = computerChoice();
  if (userChoice === "Rock" && computer === "Paper" || userChoice === "Paper" && computer === "Scissors" || userChoice === "Scissors" && computer === "Rock") {
    computerWins+=1;
  }
  else if (userChoice === computer) {
    alert("Tie")
  }
  else {
    userWins+=1;
  }

  if (userWins === 5 || computerWins === 5) {
    alert("The game has ended");
  }

  userScoreTracker(userWins);
  computerScoreTracker(computerWins);
}

// To keep track of the score and output it on screen
function userScoreTracker(user) {
  const userScore = document.querySelector(".user-score");
  userScore.textContent = "Player: " + user;
}

function computerScoreTracker(computer) {
  const computerScore = document.querySelector(".computer-score");
  computerScore.textContent = "Computer: " + computer;
}

// To assign Rock, Paper, or Scissors to userChoice based on which button is pressed
let userChoice = null;

function choseRock() {
  userChoice = "Rock";
  playRound(userChoice);
  console.log(userChoice);
}

function chosePaper() {
  userChoice = "Paper";
  playRound(userChoice);
  console.log(userChoice);
}

function choseScissors() {
  userChoice = "Scissors";
  playRound(userChoice);
  console.log(userChoice);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", choseRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", chosePaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", choseScissors);

// 1. Create buttons for when the userChoice selects rock paper or scissors
// 2. Keep track of the score for the computer and the player stopping
//      stopping at whoever wins 5 first