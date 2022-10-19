//Choices

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


//Comparison:

function comparison() {
    let playerWeapon = playerChoice();
    let compWeapon = getComputerChoice();

    if (playerWeapon === 'Rock') {

        if (compWeapon === 'Rock') {
            compWeight = 1;
        } else if (compWeapon === 'Paper') {
            compWeight = 2;
        } else {
            compWeight = 0;
        }

    } else if (playerWeapon === 'Paper') {

        if (compWeapon === 'Rock') {
            compWeight = 0;
        } else if (compWeapon === 'Paper') {
            compWeight = 1;
        } else {
            compWeight = 2;
        }

    } else {

        if (compWeapon === 'Rock') {
            compWeight = 2;
        } else if (compWeapon === 'Paper') {
            compWeight = 0;
        } else {
            compWeight = 1;
        }

    }

    return compWeight;

}


//Run:

function run() {

    let playWeight = 1;

    comparison();
    
    if (playWeight > compWeight) {
        return playScore += 1;
    } else if (playWeight < compWeight) {
        return compScore += 1;
    } else {
        return;
    }
    
}


//Score:

let playScore = 0;
let compScore = 0;

while (playScore < 5 || compScore < 5) {
    run();
    console.log(`Player score: ${playScore}`);
    console.log(`Computer score: ${compScore}`);

}

if (playScore === 5) {
    alert('You win!');
}

if (compScore === 5) {
    alert('You lose. Please try again.');
}