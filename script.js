const buttons = document.querySelectorAll("button");
let message = document.getElementById("message");
const playerTally = document.getElementById("playerScore")

message.textContent = "Tie Game, better get Lazering"

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

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


let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        message.textContent = "Tied, go Again Bruv!";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        playerScore += 1;
        message.textContent= `You win! ${playerSelection} beats ${computerSelection}!`;

    } else {
        computerScore += 1;
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    return;
}

//let computerSelection = getComputerChoice();


//console.log(playRound(playerSelection, computerSelection));
