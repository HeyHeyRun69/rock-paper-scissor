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

function playGame() {
    let humanScore = 0;
    let compScore = 0;

    function playRound(humanChoice, computerChoice) {
        let _humanChoice = humanChoice.toLowerCase();

        if (_humanChoice === computerChoice) {
            console.log('Tie!');
        } else
            if (_humanChoice === 'scissors' && computerChoice === 'paper'
                ||
                _humanChoice === 'paper' && computerChoice === 'rock'
                ||
                _humanChoice === 'rock' && computerChoice === 'scissors'
            ) {
                console.log('You win this round!');
                humanScore++;
            } else {
                console.log('You lose this round!');
                compScore++
            }
    }

    for (let i = 0; i < 5; i++) {
        let human = getComputerChoice();
        let comp = getHumanChoice();
        playRound(human, comp);
    }

    if (humanScore > compScore) {
        console.log('Human wins!');
    } else console.log('Computer wins!');
}

playGame();