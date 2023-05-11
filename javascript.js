function getComputerChoice() {
	let firstValue = "Rock";
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
	let playerSelection =
		userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();
	let computerSelection = getComputerChoice();
	let aiScore = 0;
	let humanScore = 0;

	function playRound(playerSelection, computerSelection) {
		if (computerSelection === playerSelection) {
			console.log(`Tie !`);
			return 0;
		} else if (
			(computerSelection === "Rock" && playerSelection === "Scissors") ||
			(computerSelection === "Paper" && playerSelection === "Rock") ||
			(computerSelection === "Scissors" && playerSelection === "Paper")
		) {
			console.log(
				`You lose! ${computerSelection} beats ${playerSelection}`
			);
			return aiScore++;
		} else if (
			(playerSelection === "Rock" && computerSelection === "Scissors") ||
			(playerSelection === "Paper" && computerSelection === "Rock") ||
			(playerSelection === "Scissors" && computerSelection === "Paper")
		) {
			console.log(
				`You win! ${playerSelection} beats ${computerSelection}`
			);
			return humanScore++;
		}
	}

	playRound(playerSelection, computerSelection);
	userText = prompt("Rock, Paper, Scissors?");
	playerSelection =
		userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
	userText = prompt("Rock, Paper, Scissors?");
	playerSelection =
		userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
	userText = prompt("Rock, Paper, Scissors?");
	playerSelection =
		userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
	userText = prompt("Rock, Paper, Scissors?");
	playerSelection =
		userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);

	if (humanScore > aiScore) {
		return console.log("You are the winner!");
	} else if (aiScore > humanScore) {
		return console.log("Ai Wins");
	}
}

game();
