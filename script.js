// Play Round:
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', (e) => {
  playRound(e);
}));

// Get Player Choice:
let playerChoice;

function getPlayerChoice(e) {
  const choice = e.target.textContent;
  switch (choice) {
    case '✊':
      console.log('Player picks: Rock');
      printPlayerChoice('Rock');
      return playerChoice = 'Rock';
    case '✋':
      console.log('Player picks: Paper');
      printPlayerChoice('Paper');
      return playerChoice = 'Paper';
    case '✌️':
      console.log('Player picks: Scissors');
      printPlayerChoice('Scissors');
      return playerChoice = 'Scissors';
  }
}

// Get Computer Choice:
function getComputerChoice() {
  const x = Math.floor(Math.random() * 3);

  if (x === 0) {
    console.log('Computer picks: Rock');
    printComputerChoice('Rock');
    return 'Rock';
  } if (x === 1) {
    console.log('Computer picks: Paper');
    printComputerChoice('Paper');
    return 'Paper';
  }
  console.log('Computer picks: Scissors');
  printComputerChoice('Scissors');
  return 'Scissors';
}

// Print Choices:
function printComputerChoice(weapon) {
  const p = document.querySelector('.computer-choice');
  p.textContent = `Computer selects: ${weapon}`;
}

function printPlayerChoice(weapon) {
  const p = document.querySelector('.player-choice');
  p.textContent = `Player selects: ${weapon}`;
}

// Compare choices, return weight:
let computerWeight;

function getComputerWeight() {
  const computerChoice = getComputerChoice();

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

// Track score, win condition:

let playerScore = 0;
let computerScore = 0;

function printPlayerScore() {
  const p = document.querySelector('.update-player-score');
  p.textContent = `${playerScore}`;
}

function printComputerScore() {
  const p = document.querySelector('.update-computer-score');
  p.textContent = `${computerScore}`;
}

/* while (playerScore < 5 && computerScore < 5) {
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
*/

// Compare weights, update score:

function playRound(e) {
  getPlayerChoice(e);
  const playerWeight = 1;
  getComputerWeight();
  console.log(`Computer weight: ${computerWeight}`);

  if (playerWeight > computerWeight) {
    playerScore += 1;
    printPlayerScore();
  }
  if (playerWeight < computerWeight) {
    computerScore += 1;
    printComputerScore();
  }
}