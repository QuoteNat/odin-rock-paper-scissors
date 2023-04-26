let playerScore = 0;
let computerScore = 0;
let lastPlayerMove = "";
let lastComputerMove = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
    }
}

function displayResults(result) {
    const lastRoundText = document.querySelector('#last-round');
    lastRoundText.textContent = `You played ${lastPlayerMove}, 
    and the computer played ${lastComputerMove}. You ${result} the round.`
    const scoreText = document.querySelector('#score');
    if (playerScore >= 5) {
        scoreText.textContent = 'You win!';
    } else if (computerScore >= 5) {
        scoreText.textContent = 'You lose :(';
    } else {
        scoreText.textContent = `Player=${playerScore} Computer=${computerScore}`;
    };
}

function playRound(playerSelection, computerSelection) {
    if (playerScore >= 5 || computerScore >= 5) return "game-over";
    playerSelection = playerSelection.toLowerCase();
    lastPlayerMove = playerSelection;
    lastComputerMove = computerSelection;
    let result = "";
    if (playerSelection === computerSelection) {
        result = "tie";
    } else if (playerSelection === "rock") {
        switch(computerSelection) {
            case "scissors":
                playerScore += 1;
                result = "win";
                break;
            case "paper":
                computerScore += 1;
                result = "lose";
                break;
        }
    } else if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "paper":
                playerScore += 1;
                result = "win";
                break;
            case "rock":
                computerScore += 1;
                result = "lose";
                break;
        }
    } else if (playerSelection === "paper") {
        switch(computerSelection) {
            case "rock":
                playerScore += 1;                
                result = "win";
                break;
            case "scissors":
                computerScore += 1;
                result = "lose";
                break;
        }
    }
    console.log(result);
    displayResults(result);
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener("click", () => {
    console.log(playRound("rock", getComputerChoice()));
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener("click", () => {
    console.log(playRound("paper", getComputerChoice()));
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener("click", () => {
    console.log(playRound("scissors", getComputerChoice()));
});