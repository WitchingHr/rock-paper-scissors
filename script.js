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
    return prompt('Type your weapon', 'Rock, Paper or Scissors')
}

console.log(playerChoice());