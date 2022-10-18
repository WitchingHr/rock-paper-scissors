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

let playerWeapon = playerChoice();
let compWeapon = getComputerChoice();

//Comparison:

let playWeight = 1;
let compWeight;

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

console.log(compWeight);

// for loop: game repeats until counter = 5

//Score counter
//if player beats computer,
//add 1 to player score
//if computer beats player,
//add 1 to computer score

//Win condition
//if player counter = 5,
//player wins
//if computer counter = 5,
//computer wins