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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let goodInput = false;
        let input = "";
        while (!goodInput) {
            input = prompt("Enter your play (rock, paper, or scissors): ").toLowerCase();
            if (input === "rock" || input === "paper" || input === "scissors") {
                goodInput = true;
            } else {
                console.log("That was not a valid input, please enter a valid input.");
            }
        }
    }
}

game();