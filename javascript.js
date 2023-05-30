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
	let playerSelection = "";
	let computerSelection = getComputerChoice();
	let aiScore = 0;
	let humanScore = 0;
	const youScore = document.querySelector(".score");
	const robotScore = document.querySelector(".aiscore");
	const result = document.querySelector(".result");
	const btnRock = document.querySelector(`.rock`);
	const finalResult = document.querySelector(".finalwinner");

	function playRound(playerSelection, computerSelection) {
		if (computerSelection === playerSelection) {
			result.textContent = "Tie";
			return 0;
		} else if (
			(computerSelection === "Rock" && playerSelection === "Scissors") ||
			(computerSelection === "Paper" && playerSelection === "Rock") ||
			(computerSelection === "Scissors" && playerSelection === "Paper")
		) {
			result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
			return (robotScore.textContent = `AI score is ${++aiScore}`);
		} else if (
			(playerSelection === "Rock" && computerSelection === "Scissors") ||
			(playerSelection === "Paper" && computerSelection === "Rock") ||
			(playerSelection === "Scissors" && computerSelection === "Paper")
		) {
			result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
			return (youScore.textContent = `Your score is ${++humanScore}`);
		}
	}

	/* 	playRound(playerSelection, computerSelection);
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
	playRound(playerSelection, computerSelection); */

	btnRock.addEventListener("click", () => {
		playerSelection = "Rock";
		computerSelection = getComputerChoice();
		youScore.textContent = `Human score is ${humanScore}`;
		robotScore.textContent = `AI score is ${aiScore}`;
		playRound(playerSelection, computerSelection);
		if (3 <= humanScore && aiScore < humanScore) {
			return (finalResult.textContent = "You are the winner!");
		} else if (3 <= aiScore && aiScore > humanScore) {
			return (finalResult.textContent = "AI is the winner!");
		}
	});

	const btnPaper = document.querySelector(`.paper`);

	btnPaper.addEventListener("click", () => {
		playerSelection = "Paper";
		computerSelection = getComputerChoice();
		youScore.textContent = `Human score is ${humanScore}`;
		robotScore.textContent = `AI score is ${aiScore}`;
		playRound(playerSelection, computerSelection);
		if (3 <= humanScore && aiScore < humanScore) {
			return (finalResult.textContent = "You are the winner!");
		} else if (3 <= aiScore && aiScore > humanScore) {
			return (finalResult.textContent = "AI is the winner!");
		}
	});

	const btnScissors = document.querySelector(`.scissors`);

	btnScissors.addEventListener("click", () => {
		playerSelection = "Scissors";
		computerSelection = getComputerChoice();
		youScore.textContent = `Human score is ${humanScore}`;
		robotScore.textContent = `AI score is ${aiScore}`;
		playRound(playerSelection, computerSelection);
		if (3 <= humanScore && aiScore < humanScore) {
			return (finalResult.textContent = "You are the winner!");
		} else if (3 <= aiScore && aiScore > humanScore) {
			return (finalResult.textContent = "AI is the winner!");
		}
	});
}

game();
