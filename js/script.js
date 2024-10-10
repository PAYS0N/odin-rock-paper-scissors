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
    return strChoice
}

function getHumanChoice(text = "Do you choose rock, paper, or scissors?") {
    let strInput = prompt(text).toLowerCase();

    let strChoice;
    switch (strInput) {
        case 'rock':
            strChoice = 'rock';
            break;
        case 'paper':
            strChoice = 'paper';
            break;
        case 'scissors':
            strChoice = 'scissors';
            break;
        default:
            return getHumanChoice("Please type only the word rock, paper, or scissors.");
    }

    return strChoice;
}

function playRockPaperScissors() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('This round was a tie!');
        }
        else if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') {
                humanScore++;
                console.log('You win, rock beats scissors!')
            }
            else{
                computerScore++;
                console.log('You lose, paper beats rock!')
            }
        }
        else if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') {
                computerScore++;
                console.log('You lose, paper beats scissors!')
            }
            else{
                humanScore++;
                console.log('You win, paper beats rock!')
            }
        }
        else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore++;
                console.log('You lose, rock beats scissors!')
            }
            else{
                humanScore++;
                console.log('You win, scissors beats paper!')
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        strCompChoice = getComputerChoice();
        strHumanChoice = getHumanChoice();
        playRound(strHumanChoice, strCompChoice);
    }
    if (humanScore > computerScore) {
        console.log("You win the match!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose the match.");
    }
    else {
        console.log("It's a tie!");
    }
}