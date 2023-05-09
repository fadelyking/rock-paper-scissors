function getComputerChoice() {
    let firstValue = "Rock" ;
    let secondValue = "Paper";
    let thirdValue = "Scissors";

    randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 1) {
        return firstValue;
    } else if (randomNum == 2) {
        return secondValue;
    } else {
        return thirdValue;
    }
}

let userText = "paPEr";
let computerSelection = getComputerChoice();
let playerSelection = userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();

console.log(playerSelection)

function singleRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log("tie");

    } else if ((computerSelection === "Rock" && playerSelection === "Scissors") || 
    (computerSelection === "Paper" && playerSelection === "Rock") || 
    (computerSelection === "Scissors" && playerSelection === "Paper")) {

        console.log(`You lose ! ${computerSelection} beats ${playerSelection}`); 
    }  
    
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Scissors" && computerSelection === "Paper")) {

        console.log(`You win ! ${computerSelection} beats ${playerSelection}`); 
    } 
}


singleRound(computerSelection, playerSelection);

function playRound(playerSelection, computerSelection) {

  }