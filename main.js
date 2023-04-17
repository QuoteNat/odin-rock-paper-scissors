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
        let computerChoice = getComputerChoice();
        let output = "The computer played " + computerChoice + ". ";
        let results = playRound(input, computerChoice);
        switch(results) {
            case "tie":
                output = output + "It's a tie.";
                break;
            case "win":
                playerScore += 1;
                output = output + "You win this round.";
                break;
            case "lose":
                computerScore += 1;
                output = output + "You lose this round."
                break;
        }

        output = output + ` Player's score is ${playerScore}, and the computer's is ${computerScore}.`
        console.log(output);
    }

    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore === computerScore) {
        console.log("You tied the game.");
    } else {
        console.log("You lost the game. :(");
    }
}

game();