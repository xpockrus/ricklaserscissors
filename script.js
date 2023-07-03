const buttons = document.querySelectorAll("button");
let message = document.getElementById("message");
const playerTally = document.getElementById("playerScore");
const computerTally = document.getElementById("computerScore");

message.textContent = "Second place is just the first place loser, so better get Lazering"

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
playerTally.textContent = playerScore;
computerTally.textContent = computerScore;


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        message.textContent = "Tied, go Again Bruv!";

    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        playerTally.textContent = ++playerScore;
        message.textContent= `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;

    } else {
        computerTally.textContent = ++computerScore;
        message.textContent = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }
    checkVictory();
}

function checkVictory() {
    if (playerScore == 5 || computerScore == 5) {
        disablebtns();
        createResetBtn();
        if (playerScore == 5) {
        message.textContent = `You have slain the mighty Machine God. 
                            ${playerScore} is indeed greater than ${computerScore}`;
        } else if (computerScore == 5) {
        message.textContent = `The mighty Machine God has integrated your consciousness into its greatness.
                            ${playerScore} was not enough to beat ${computerScore}`;
        }   
    }
}

function disablebtns() {
    buttons.forEach((button) => {
        button.setAttribute("disabled", "");
    })
}

function createResetBtn() {
    const reset = document.getElementById("reset");
    const reload = document.createElement("button");
    reload.innerText = "Roll the dice and play again?";
    reload.addEventListener("click", () => {
        window.location.reload();
    })
    reset.appendChild(reload);
}