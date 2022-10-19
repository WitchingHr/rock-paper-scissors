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
    let pWeapon = playerChoice();
    let compWeapon = getComputerChoice();

    if (pWeapon === 'Rock') {

        if (compWeapon === 'Rock') {
            compWeight = 1;
        } else if (compWeapon === 'Paper') {
            compWeight = 2;
        } else {
            compWeight = 0;
        }

    } else if (pWeapon === 'Paper') {

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

    let pWeight = 1;

    comparison();
    
    if (pWeight > compWeight) {
        return pScore += 1;
    } else if (pWeight < compWeight) {
        return compScore += 1;
    } else {
        return;
    }
    
}


//Score:

let pScore = 0;
let compScore = 0;

while (pScore < 5 && compScore < 5) {
    run();
    console.log(`Player score: ${pScore}`);
    console.log(`Computer score: ${compScore}`);

    if (pScore === 5) {
    alert('You win!');
    break;
    }

    if (compScore === 5) {
    alert('You lose. Please try again.');
    break;
    }

}

