function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    if (x === 0) {
        return 'Rock'
    } else if (x === 1) {
        return 'Paper'
    } else {
        return 'Scissor'
    }
}

console.log(`Computer picks: ${getComputerChoice()}`);

function playerChoice() {
    let x = prompt('Type your weapon', 'Rock, Paper or Scissors');
    x = x.toLowerCase();

    switch (x) {
        case 'rock':
            console.log('Player picks: Rock')
            return 'Rock';
            break;
        case 'paper':
            console.log('Player picks: Paper')
            return 'Paper';
            break;
        case 'scissors':
            console.log('Player picks: Scissors')
            return 'Scissors';
            break;
        default:
            alert('Choice not recognized. Choose again');
            playerChoice();
    }
}

playerChoice();