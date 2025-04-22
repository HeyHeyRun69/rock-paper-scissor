let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
    let str1 = 'rock';
    let str2 = 'paper';
    let str3 = 'scissors';

    let choice = Math.floor(Math.random() * 3 + 1);

    switch (choice) {
        case 1:
            return str1;
            break;
        case 2:
            return str2;
            break;
        case 3:
            return str3;
            break;
    }
}

function getHumanChoice() {
    let choice = prompt('Choose between Rock, Paper and Scissors');
    return choice;
}

function playGame(humanChoice, computerChoice) {
    let roundResults = document.querySelector('.round-results');
    let playerScoreDisplay = document.querySelector('#player-score');
    let compScoreDisplay = document.querySelector('#computer-score');

    function playRound(humanChoice, computerChoice) {
        let _humanChoice = humanChoice.toLowerCase();
        
        if (_humanChoice === computerChoice) {
            roundResults.textContent = 'Tie!';
        } else
            if (_humanChoice === 'scissors' && computerChoice === 'paper'
                ||
                _humanChoice === 'paper' && computerChoice === 'rock'
                ||
                _humanChoice === 'rock' && computerChoice === 'scissors'
            ) {
                roundResults.textContent =  'You win this round!';
                humanScore++;
                playerScoreDisplay.textContent = String(humanScore);
            } else {
                roundResults.textContent = 'You lose this round!';
                compScore++
                compScoreDisplay.textContent = String(compScore);
            }
    }

    playRound(humanChoice, computerChoice);

    if (humanScore === 5) {
        alert('You won!!!');
    } else if (compScore === 5) {
        alert('You lost!!!');
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playGame(e.target.id, getComputerChoice());
    })
})