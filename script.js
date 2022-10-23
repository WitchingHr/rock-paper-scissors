// Get choices

function getComputerChoice() {
  const x = Math.floor(Math.random() * 3);

  if (x === 0) {
    console.log('Computer picks: Rock');
    return 'Rock';
  } if (x === 1) {
    console.log('Computer picks: Paper');
    return 'Paper';
  }
  console.log('Computer picks: Scissors');
  return 'Scissors';
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
  const choice = e.target.textContent;

  switch (choice) {
    case '✊':
      console.log('Player picks: Rock');
      return playerChoice = 'Rock';
    case '✋':
      console.log('Player picks: Paper');
      return playerChoice = 'Paper';
    case '✌️':
      console.log('Player picks: Scissors');
      return playerChoice = 'Scissors';
  }

  getComputerWeight();
}));

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

// Compare weights, update score:

function playRound() {
  const playerWeight = 1;
  getComputerWeight();

  if (playerWeight > computerWeight) {
    return playerScore += 1;
  }
  if (playerWeight < computerWeight) {
    return computerScore += 1;
  }
}

// Track score, win condition:

let playerScore = 0;
let computerScore = 0;

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