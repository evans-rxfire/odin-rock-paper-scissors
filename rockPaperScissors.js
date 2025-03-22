//set global variables

let humanScore = 0;
let computerScore = 0;
let computerChoice = "";
let humanChoice = "";

//function that will radomly return "rock" "paper" or "scissors" name = getComputerChoice
//use Math.random to get random # 0-1, then multiply 10 to get random # between 0 and 9
// if # === 0, redo
// if # is 1-3 rock, if 4-6 paper, if 7-9 scissors

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber === 0) {
        randomNumber = Math.floor(Math.random() * 10);
    }
    else if (randomNumber >= 1 && randomNumber <= 3) {
        computerChoice = "rock";
    }
    else if (randomNumber >= 4 && randomNumber <= 6) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

//function that takes the human coice and returns it. name = getHumanChoice
//use prompt method

function getHumanChoice() {
    let typedChoice = prompt("Choose wisely.");
    
    if (typedChoice.toLowerCase() === "rock") {
        humanChoice = "rock";
    }
    else if (typedChoice.toLowerCase() === "paper") {
        humanChoice = "paper";
    }
    else if (typedChoice.toLowerCase() === "scissors") {
        humanChoice = "scissors";
    }
    else {

    }

    return humanChoice;
}

//function that scores one round. name = playRound
//take human and computer choices as arguements
//play single round, increments the round winner's score, and logs a winner announcement
/*possible outcomes:
    rock rock
    rock paper
    rock scissors
    paper paper
    paper rock
    paper scissors
    scissors scissors
    scissors rock
    scissors paper*/


//function that calls playRound 5 times, keeps track of the score, and declares a winner at the end. name = playGame

function playGame() {
    for (let i = 0; i < 5; i++) {

        function playRound(humanChoice, computerChoice) {
            let roundResult = "";
        
            if (humanChoice === "rock" && computerChoice === "rock") {
                roundResult = "You tie! Rock ties Rock";
            }
            else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore = computerScore + 1;
                roundResult = "You lose! Paper beats Rock";
            }
            else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore = humanScore + 1;
                roundResult = "You win! Rock beats Scissors";
            }
            else if (humanChoice === "paper" && computerChoice === "paper") {
                roundResult = "You tie! Paper ties Paper";
            }
            else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore = humanScore + 1;
                roundResult = "You win! Paper beats Rock";
            }
            else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore = computerScore + 1;
                roundResult = "You lose! Scissors beats Paper";
            }
            else if (humanChoice === "scissors" && computerChoice === "scissors") {
                roundResult = "You tie! Scissors ties Scissors";
            }
            else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore = computerScore + 1;
                roundResult = "You lose! Rock beats Scissors";
            }
            else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore = humanScore + 1;
                roundResult = "You win! Scissors beats Paper";
            }
        
            console.log(roundResult);
        }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    console.log("Human Score: ", humanScore, " ", "Computer Score: ", computerScore);

    let gameResult = "";

    if (humanScore > computerScore) {
        gameResult = "Congratulations! You are the winner!";
    }
    else if (humanScore < computerScore) {
        gameResult = "You lose! Better luck next time.";
    }
    else {
        gameResult = "The game ends in a tie! Inconceivable!";
    }

    alert(gameResult);
}

playGame();
