/*let computerSelection;
let playerSelection;*/

const possibleComputerChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return possibleComputerChoices[~~(Math.random() * possibleComputerChoices.length)];
}
function getPlayerChoice() {
    return prompt("Rock, paper, scissors? Bruv?");
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return "Aye bruv you won! Rock beats Scissors!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "Sorry mate, you don lost this one. Rock losers hard to Paper!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return "Oi! You tied! Rock vs Rock! Oil up them fingers and go again!" 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        return "Scissor me timbers, you tied! Have a go again!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return "Snip Snip Snip! You cut that poor computers paper roight in havv den!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return "Oof, those scissors got busted. Better luck next time mate." 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return "Oi you alright? Your paper just got nixed right in the knickers."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return "Probably the most boring tie you can imagine. Paper vs Paper."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "Aye look at you, covering that rock with your paper, you don good kid."
    } else {
        return "Oi what the frik? can't you shpell?"
    }
}

let playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));