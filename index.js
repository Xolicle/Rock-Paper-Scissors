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
function playGame() {
  // let guess = prompt(
  //   "Choose one from the following: Rock, Scissors, Paper"
  // ).toLowerCase();
  let guess;
  let moves = 0;
  const btnList = document.querySelectorAll(".buttons");
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
      if (moves >= 5) {
        gameOver(btnList, round);
      }
    });
  });
}
playGame();
// let humanChoice;
// console.log("human choice is: " + humanChoice);
let computerScore = 0;
let humanScore = 0;
function playRound(computerSelection, humanSelection) {
  console.log("computer choice is : " + computerSelection);
  console.log("human choice is: " + humanSelection);
  const playerScore = document.querySelector(".playerScore");
  const comScore = document.querySelector(".computerScore");
  const res = document.querySelector(".resultPerRound");

  if (computerSelection === humanSelection) {
    // computerScore = computerScore + 1;
    // humanScore = humanScore + 1;
    //
    // console.log(computerSelection);
    // console.log(humanSelection);
    res.innerHTML = "<p>It's a draw!</p>";
    console.log("It's a draw!");
  }
  if (computerSelection === "rock" && humanSelection === "scissors") {
    computerScore = computerScore + 1;
    comScore.innerText = computerScore;
    res.innerHTML = "<p>You lost! Rock beats Scissors</p>";
    console.log("You lost! Rock beats Scissors");
  }
  if (computerSelection === "scissors" && humanSelection === "paper") {
    computerScore = computerScore + 1;
    comScore.innerText = computerScore;
    res.innerHTML = "<p>You lost! Scissors beats Paper</p>";
    console.log("You lost! Scissors beats Paper");
  }
  if (computerSelection === "paper" && humanSelection === "rock") {
    computerScore = computerScore + 1;
    comScore.innerText = computerScore;
    res.innerHTML = "<p>You lost! Paper beats Rock</p>";
    console.log("You lost! Paper beats Rock");
  }
  if (computerSelection === "scissors" && humanSelection === "rock") {
    humanScore = humanScore + 1;
    playerScore.innerText = humanScore;
    res.innerHTML = "<p>You won! Rock beats Scissors</p>";
    console.log("You won! Rock beats Scissors");
  }
  if (computerSelection === "paper" && humanSelection === "scissors") {
    humanScore = humanScore + 1;
    playerScore.innerText = humanScore;
    res.innerHTML = "<p>You won! Scissors beats Paper</p>";
    console.log("You won! Scissors beats Paper");
  }
  if (computerSelection === "rock" && humanSelection === "paper") {
    humanScore = humanScore + 1;
    playerScore.innerText = humanScore;
    res.innerHTML = "<p>You Won! Paper beats Rock</p>";
    console.log("You Won! Paper beats Rock");
  }
}
function gameOver(list, move) {
  const result = document.querySelector(".result");
  const weapon = document.querySelector(".weapon");
  const restart = document.querySelector(".restart");
  const resultPerRound = document.querySelector(".resultPerRound");
  const end = document.querySelector(".gameOver");
  list.forEach((elem) => {
    elem.style.display = "none";
  });
  move.style.display = "none";
  resultPerRound.style.display = "none";
  weapon.style.display = "none";
  restart.style.display = "flex";
  end.style.display = "flex";
  result.style.display = "flex";
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  if (humanScore > computerScore) {
    result.innerHTML = "<h3>You Won!</h3>";
  } else if (humanScore == computerScore) {
    result.innerHTML = "<h3>It's a Draw!</h3>";
  } else result.innerHTML = "<h3>You Lost!</h3>";
}

// if (computerScore > humanScore) {
//   alert("You lost!");
// } else if (computerScore === humanScore) {
//   alert("It's a draw!");
// } else alert("You won!");
