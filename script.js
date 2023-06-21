const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(target.id, computerSelection);
    })
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

let computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection));
