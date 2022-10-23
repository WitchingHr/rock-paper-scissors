// Event Listener, Starts Round:
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
      return playerChoice = 'Rock';
    case '✋':
      return playerChoice = 'Paper';
    case '✌️':
      return playerChoice = 'Scissors';
  }
}

// Get Computer Choice:
function getComputerChoice() {
  const x = Math.floor(Math.random() * 3);

  if (x === 0) {
    return 'Rock';
  } if (x === 1) {
    return 'Paper';
  }
  return 'Scissors';
}

// Get Weight:
let computerWeight;
let computerChoice;
function getComputerWeight() {
  computerChoice = getComputerChoice();

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

// Compare Weights, Update Score:

function playRound(e) {
  getPlayerChoice(e);
  const playerWeight = 1;
  getComputerWeight();
  printMessage();

  if (playerWeight > computerWeight) {
    playerScore += 1;
    printPlayerScore();
    if (playerScore === 5) {
      alert('You Win');
    }
  }
  if (playerWeight < computerWeight) {
    computerScore += 1;
    printComputerScore();
    if (computerScore === 5) {
      alert('You Lose');
    }
  }
}

// Message box

function printMessage() {
  const p = document.querySelector('.message');
  p.textContent = `Player selects ${playerChoice} and Computer selects ${computerChoice}`;
}