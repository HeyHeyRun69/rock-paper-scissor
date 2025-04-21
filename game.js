function getComputerChoice() {
    let str1 = 'rock';
    let str2 = 'paper';
    let str3 = 'scissors';

    let choice = Math.floor(Math.random() * 3 + 1);

    switch(choice) {
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
    
        if(_humanChoice === 'paper') {
            if(computerChoice === 'rock') {
                console.log('You win! paper beats rock');
                humanScore++;;
            } else if (computerChoice === 'paper') {
                console.log(`It's a tie!`);
            } else if (computerChoice === 'scissors') {
                console.log('You lose! scissors beats paper');
                compScore++;
            }
        } else if (_humanChoice === 'rock') {
            if(computerChoice === 'rock') {
                console.log(`It's a tie!`);
            } else if (computerChoice === 'paper') {
                console.log(`You lose! paper beats rock`);
                compScore++;
            } else if (computerChoice === 'scissors') {
                console.log('You win! rock beats scissors');
                humanScore++;
            }
        } else if (_humanChoice === 'scissors') {
            if(computerChoice === 'rock') {
                console.log(`You lose! rock beats scissors`);
                compScore++;
            } else if (computerChoice === 'paper') {
                console.log(`You win! scissors beats paper`);
                humanScore++;
            } else if (computerChoice === 'scissors') {
                console.log(`It's a tie!`);
            }
        }
    }

    for(let i = 0; i < 5; i++) {
        let human = getComputerChoice();
        let comp = getHumanChoice();
        playRound(human, comp);
    }

    if(humanScore > compScore) {
        console.log('Human wins!');
    } else console.log('Computer wins!');
}

playGame();