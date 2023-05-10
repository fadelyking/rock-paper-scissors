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



    function game() {
        let userText = prompt("Rock, Paper, Scissors?");
        const playerSelection = userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();
        let computerSelection = getComputerChoice();
        let aiScore = 0;
        let humanScore = 0;
        let winIndicator = 0;

        function playRound(playerSelection, computerSelection) {
        if (computerSelection === playerSelection) {
            console.log(`Tie !`)
            return 0
             
            
    
        } else if ((computerSelection === "Rock" && playerSelection === "Scissors") || 
        (computerSelection === "Paper" && playerSelection === "Rock") || 
        (computerSelection === "Scissors" && playerSelection === "Paper")) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
            return 1;
        }  
        
        else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            return 2;
        } 
    }
const result = playRound();
   if (result === 1) {
    aiScore++;
   } else if (result === 2) {
    humanScore++;
   } 
    userText = prompt("Rock, Paper, Scissors?");
    computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    if (result === 1) {
        aiScore++;
       } else if (result === 2) {
        humanScore++;
       } 
    userText = prompt("Rock, Paper, Scissors?");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (result === 1) {
        aiScore++;
       } else if (result === 2) {
        humanScore++;
       } 
    userText = prompt("Rock, Paper, Scissors?");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (result === 1) {
        aiScore++;
       } else if (result === 2) {
        humanScore++;
       } 
    userText = prompt("Rock, Paper, Scissors?");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (result === 1) {
        aiScore++;
       } else if (result === 2) {
        humanScore++;
       } 

    }

game();
