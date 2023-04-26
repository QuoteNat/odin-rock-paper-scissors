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