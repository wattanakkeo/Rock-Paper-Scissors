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

//Generates a random number between 0-99
function random() {
  return parseInt(Math.random() * 100);
}

function userChoice(userInput) {
  if (userInput === "1") {
    return "Rock"
  }
  else if (userInput === "2") {
    return "Paper"
  }
  else if (userInput === "3") {
    return "Scissors"
  }
  else {
    return "Invalid selection"
  }
}

/*let userInput = prompt("Enter\n1 for Rock\n2 for Paper\n3 for Scissors")

while (userInput !== "f") {
  let computer = computerChoice()
  let user = userChoice(userInput)

  if (user === "Invalid selection") {
    let userInput = prompt("Enter\n1 for Rock\n2 for Paper\n3 for Scissors")
  }
  else if (user === "Rock" && computer === "Paper" || user === "Paper" && computer === "Scissors" || user === "Scissors" && computer === "Rock") {
    alert("Computer chose " + computer)
    alert("You Lose")
  }
  else if (user === computer) {
    alert("Computer chose " + computer)
    alert("Tie")
  }
  else {
    alert("Computer chose " + computer)
    alert("You Win")
  }
  userInput = prompt("Enter\n1 for Rock\n2 for Paper\n3 for Scissors")
}
  */

function choseRock() {
  userInput = 1;
  console.log("userInput:", userInput);
}

function chosePaper() {
  userInput = 2;
  console.log("userInput:", userInput);
}

function choseScissors() {
  userInput = 3;
  console.log("userInput:", userInput);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", choseRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", chosePaper);

const scissors = document.querySelector("Scissors");
scissors.addEventListener("click", choseScissors);
