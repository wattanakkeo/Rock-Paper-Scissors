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

//create a funciton that generates a random number 0-99
function random() {
  return parseInt(Math.random() * 100);
}

/*
INPUT the user to input rock, paper, or scissors
IF computerChoice() === ""
*/

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

let userInput = prompt("Enter\n1 for Rock\n2 for Paper\n3 for Scissors")

while (userInput !== "f") {
  let computer = computerChoice()
  let user = userChoice(userInput)

  if (user === "Invalid selection") {
    let userInput = prompt("Enter\n1 for Rock\n2 for Paper\n3 for Scissors")
  }
  else if (user === "Rock" && computer === "Paper" || user === "Paper" && computer === "Scissors" || user === "Scissors" && computer === "Rock") {
    alert("You Lose")
  }
  else {
    alert("You Win")
  }
  userInput = prompt("Enter\n1 for Rock\n2 for Paper\n3 for Scissors")
}