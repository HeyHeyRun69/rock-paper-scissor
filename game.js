function getComputerChoice() {
    let str1 = 'Rock';
    let str2 = 'Paper';
    let str3 = 'Scissors';

    let choice = Math.floor(Math.random() * 3 + 1);

    switch(choice) {
        case 1:
            console.log(str1);
            break;
        case 2:
            console.log(str2);
            break;
        case 3:
            console.log(str3);
            break;
        }
}

getComputerChoice();