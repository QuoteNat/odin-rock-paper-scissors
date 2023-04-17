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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === "rock") {
        switch(computerSelection) {
            case "scissors":
                return "win";
            case "paper":
                return "lose";
        }
    } else if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "paper":
                return "win";
            case "rock":
                return "lose";
        }
    } else if (playerSelection === "paper") {
        switch(computerSelection) {
            case "rock":
                return "win";
            case "scissors":
                return "lose";
        }
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));