function getRandomNum(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
function getComputerChoice() {
  let computerGuess = getRandomNum(1, 3);
  // console.log(`computer guess is: ${computerGuess}`);
  if (computerGuess == 1) {
    return "rock";
  } else if (computerGuess == 2) {
    return "paper";
  } else return "scissors";
}

// let computerChoice;
// // console.log("computer choice is: " + computerChoice);
// let computerChoice = getComputerChoice();
function getHumanChoice() {
  // let guess = prompt(
  //   "Choose one from the following: Rock, Scissors, Paper"
  // ).toLowerCase();
  let guess;
  let moves = 0;
  const btnList = document.querySelectorAll("button");
  // console.log(btnList);
  const round = document.querySelector(".moves");
  round.innerHTML = `Round 1/5`;
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      moves++;
      round.innerHTML = `Round ${moves + 1}/5`;
      if (btn.id == "rock") {
        guess = "rock";
        let computerChoice = getComputerChoice();
        playRound(computerChoice, guess);
      } else if (btn.id == "paper") {
        guess = "paper";
        let computerChoice = getComputerChoice();
        playRound(computerChoice, guess);
      } else {
        guess = "scissors";
        let computerChoice = getComputerChoice();
        playRound(computerChoice, guess);
      }
      // console.log(`moves is ${moves}`);
      if (moves == 5) {
        gameOver(btnList, round);
      }
    });
  });
}
getHumanChoice();
// let humanChoice;
// console.log("human choice is: " + humanChoice);
let computerScore = 0;
let humanScore = 0;
function playRound(computerSelection, humanSelection) {
  console.log("computer choice is : " + computerSelection);
  console.log("human choice is: " + humanSelection);
  if (computerSelection === humanSelection) {
    computerScore = computerScore + 1;
    humanScore = humanScore + 1;
    console.log("It's a draw!");
  }
  if (computerSelection === "rock" && humanSelection === "scissors") {
    computerScore = computerScore + 1;
    console.log("You lost! Rock beats Scissors");
  }
  if (computerSelection === "scissors" && humanSelection === "paper") {
    computerScore = computerScore + 1;
    console.log("You lost! Scissors beats Paper");
  }
  if (computerSelection === "paper" && humanSelection === "rock") {
    computerScore = computerScore + 1;
    console.log("You lost! Paper beats Rock");
  }
  if (computerSelection === "scissors" && humanSelection === "rock") {
    humanScore = humanScore + 1;
    console.log("You won! Rock beats Scissors");
  }
  if (computerSelection === "paper" && humanSelection === "scissors") {
    humanScore = humanScore + 1;
    console.log("You won! Scissors beats Paper");
  }
  if (computerSelection === "rock" && humanSelection === "paper") {
    humanScore = humanScore + 1;
    console.log("You Won! Paper beats Rock");
  }
}
function gameOver(list, move) {
  list.forEach((elem) => {
    elem.style.display = "none";
  });
  move.style.display = "none";
}

// if (computerScore > humanScore) {
//   alert("You lost!");
// } else if (computerScore === humanScore) {
//   alert("It's a draw!");
// } else alert("You won!");
