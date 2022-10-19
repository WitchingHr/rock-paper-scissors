//Get choices

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    if (x === 0) {
        console.log('Computer picks: Rock')
        return 'Rock'
    } else if (x === 1) {
        console.log('Computer picks: Paper')
        return 'Paper'
    } else {
        console.log('Computer picks: Scissors')
        return 'Scissors'
    }
}

function getPlayerChoice() {
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
            getPlayerChoice();
    }
}


//Compare choices, return weight:

function getComputerWeight() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice === 'Rock') {

        if (computerChoice === 'Rock') {
            computerWeight = 1;
        } else if (computerChoice === 'Paper') {
            computerWeight = 2;
        } else {
            computerWeight = 0;
        }

    } else if (playerChoice === 'Paper') {

        if (computerChoice === 'Rock') {
            computerWeight = 0;
        } else if (computerChoice === 'Paper') {
            computerWeight = 1;
        } else {
            computerWeight = 2;
        }

    } else {

        if (computerChoice === 'Rock') {
            computerWeight = 2;
        } else if (computerChoice === 'Paper') {
            computerWeight = 0;
        } else {
            computerWeight = 1;
        }

    }

    return computerWeight;

}


//Compare weights, update score:

function playRound() {

    const playerWeight = 1;
    getComputerWeight();
    
    if (playerWeight > computerWeight) {
        return playerScore += 1;
    } else if (playerWeight < computerWeight) {
        return computerScore += 1;
    } else {
        return;
    }
    
}


//Track score, win condition:

let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 && computerScore < 5) {
    playRound();
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore === 5) {
    alert('You win!');
    break;
    }

    if (computerScore === 5) {
    alert('You lose. Please try again.');
    break;
    }

}

