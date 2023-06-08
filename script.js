let computerSelection;
let playerSelection

const possibleComputerChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    function getComputerChoice() {
        return possibleComputerChoices[~~(Math.random() * possibleComputerChoices.length)];
    }
    console.log(getComputerChoice());
    playerSelection = getPlayerChoice().toLowerCase();
    function getPlayerChoice() {
        return prompt("Rock, paper, scissors? Bruv?");
    }
    console.log(playerSelection);

    if ((playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "scissors" && computerSelection === "Paper") ||
    (playerSelection === "paper" && computerSelection === "Rock")) {
        return (++playerScore)
    } else if ((playerSelection === "rock" && computerSelection === "Paper") ||
    (playerSelection === "scissors" && computerSelection === "Rock")
    (playerSelection === "paper" && computerSelection === "Scissors")) {
        return (++computerScore)
    } else if (playerSelection == computerSelection.toLowerCase()) {
        return ("It's bloody tie ya wanker");
    } else {
        return "Oi what the frik? can't you shpell?"
    }
}
function game()

console.log(playRound(playerSelection, computerSelection));