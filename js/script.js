function getComputerChoice() {
    let nRand = Math.floor(Math.random() * 3);
    let strChoice;
    switch (nRand) {
        case 0:
            strChoice = 'rock';
            break;
        case 1:
            strChoice = 'paper';
            break;
        case 2:
            strChoice = 'scissors';
            break;
    }
    return strChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        feedback.textContent = 'This round was a tie!';
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            humanScore++;
            feedback.textContent = 'You win, rock beats scissors!';
        }
        else{
            computerScore++;
            feedback.textContent = 'You lose, paper beats rock!';
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            feedback.textContent = 'You lose, paper beats scissors!';
        }
        else{
            humanScore++;
            feedback.textContent = 'You win, paper beats rock!';
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            feedback.textContent = 'You lose, rock beats scissors!';
        }
        else{
            humanScore++;
            feedback.textContent = 'You win, scissors beats paper!';
        }
    }
    playerScoreboard.textContent = humanScore;
    computerScoreboard.textContent = computerScore;
    if (humanScore > 4) {
        output.textContent = 'You win the game!';
        gameEnded = true;
    }
    else if (computerScore > 4) {
        output.textContent = 'You lose the game!';
        gameEnded = true;
    }
}

function startRound() {
    if (gameEnded) {
        feedback.textContent = 'Game is over.';
    }
    else if (this.classList.contains('rock-button')) {
        humanChoice = 'rock';
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    else if (this.classList.contains('scissors-button')) {
        humanChoice = 'scissors';
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    else{
        humanChoice = 'paper';
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

let humanScore = 0;
let computerScore = 0;
let gameEnded = false;
const output = document.querySelector(".outcome");
const feedback = document.querySelector(".dialog");
const playerScoreboard = document.querySelector(".player-score");
const computerScoreboard = document.querySelector(".computer-score");

const buttons = document.querySelectorAll(".input-button");
buttons.forEach((button) => {
    button.addEventListener("click", startRound);
})
