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
  const SECOND = 1000;
  setTimeout(computerSelectionImage(computer), SECOND);
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
    userWins = 0;
    computerWins = 0;
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

// Created for less redundancy for an image pop up for when the user selects rock, 
//  paper, or scissors

function userSelectionImage(selection) {
  const userImageContainer = document.querySelector("#player");
  //Clears the previous image
  userImageContainer.textContent = "";
  const userImage = document.createElement("img");
  userImage.classList.add("selectionImage")

  if (selection === "Rock") {
    userImage.src="images/rock.png";
    userImage.style.alignItems = "center";
  }
  else if (selection === "Paper") {
    userImage.src="images/paper.jpg";
  }
  else {
    userImage.src="images/scissors.png";
  }

  userImageContainer.appendChild(userImage);
}

function computerSelectionImage(selection) {
  const computerImageContainer = document.querySelector("#computer");
  computerImageContainer.textContent = "";
  const computerImage = document.createElement("img");
  computerImage.classList.add("selectionImage");

  if (selection === "Rock") {
    computerImage.src = "images/rock.png";
  }
  else if (selection === "Paper") {
    computerImage.src = "images/paper.jpg";
  }
  else {
    computerImage.src = "images/scissors.png";
  }

  computerImageContainer.appendChild(computerImage);

}

// To assign Rock, Paper, or Scissors to userChoice based on which button is pressed
let userChoice = null;

function choseRock() {
  userChoice = "Rock";
  playRound(userChoice);
  userSelectionImage(userChoice);
}

function chosePaper() {
  userChoice = "Paper";
  playRound(userChoice);
  userSelectionImage(userChoice);
}

function choseScissors() {
  userChoice = "Scissors";
  playRound(userChoice);
  userSelectionImage(userChoice);
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