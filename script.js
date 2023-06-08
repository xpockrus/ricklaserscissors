let computerSelection;
let playerSelection;

const possibleComputerChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return possibleComputerChoices[~~(Math.random() * possibleComputerChoices.length)];
}
console.log(getComputerChoice());

