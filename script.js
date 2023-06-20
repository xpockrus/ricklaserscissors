function getComputerChoice() {
    let computerNumber = ~~(Math.random() * 3);
    switch (computerNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
let playerChoice = prompt("Rock, paper, or Scissors? Bruv?");
let playerSelection = playerChoice.toLowerCase();
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection === computerSelection) {
        return "Tied, go again!"
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        playerScore += 1;
        result += `You win! ${playerSelection} beats ${computerSelection}!`;
        return result;
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors")) {
            
        computerScore += 1;
        result += `You lose! ${computerSelection} beats ${playerSelection}`;
        return result;
    }
}
function game(playerScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log("You have vanquished your enemy!");
    } else if (computerScore > playerScore) {
        console.log("The machine god has slain you!");
    }
    return;
}

let computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection));
