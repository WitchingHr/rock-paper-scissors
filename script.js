// Event Listener, Starts Round:
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', (e) => {
  playSound();
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
  }
  if (playerWeight < computerWeight) {
    computerScore += 1;
    printComputerScore();
  }

  if (playerScore === 5 || computerScore === 5) {
    openModal();
  }
}

// Message Box
function printMessage() {
  const p = document.querySelector('.message');
  p.innerHTML = `Player selects <strong>${playerChoice}</strong> and Computer selects <strong>${computerChoice}</strong>...`;

  const b = document.querySelector('.beats');
  if (1 > computerWeight){
    b.textContent = `${playerChoice} beats ${computerChoice}!`;
  } else if (1 < computerWeight) {
    b.textContent = `${playerChoice} loses to ${computerChoice}!`
  } else {
    b.textContent = `TIE!`
  }
  
}

// Reset Game
function resetGame() {
  playerScore = 0;
  printPlayerScore();
  computerScore = 0;
  printComputerScore();

  const p = document.querySelector('.message');
  p.innerHTML = '<br>';
  const b = document.querySelector('.beats');
  b.innerHTML = '<br>';
}

// Sound
function playSound() {
  const audio = document.querySelector('audio');
  audio.currentTime = 0;
  audio.play();
}

// Modal
const modal = document.querySelector('.modal');

function openModal() {
  modal.style.display = 'block';
  if (playerScore === 5) {
    const p = document.querySelector('.win');
    p.textContent = 'Congratulations, You Won!';
  }
  if (computerScore === 5) {
    const p = document.querySelector('.win');
    p.textContent = 'You Lost! Yikes.';
  }
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    playSound();
    resetGame();
  }
}

const span = document.getElementsByClassName('close')[0];
span.onclick = function() {
  modal.style.display = 'none';
  playSound();
  resetGame();
}