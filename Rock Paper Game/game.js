const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const playerChoice = document.getElementById('playerchoice');
const computerChoice = document.getElementById('computerchoice');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

let playerscore = 0;
let compscore = 0;


rock.addEventListener('click', () => value('rock'));
paper.addEventListener('click', () => value('paper'));
scissors.addEventListener('click', function () { value('scissors'); });


const choices = ['rock', 'paper', 'scissors'];

function value(playerSelection) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    const computerSelection = choices[randomIndex];
    let result = "";

    if (playerSelection === computerSelection) {
        result = "ITS A TIE!";
    } else {
        switch (playerSelection) {
            case 'rock':
                (computerSelection === 'scissors') ? result = 'YOU WIN!' : result = "YOU LOSE!";
                break;
            case 'paper':
                (computerSelection === 'rock') ? result = 'YOU WIN!' : result = "YOU LOSE!";
                break;
            case 'scissors':
                (computerSelection === 'paper') ? result = 'YOU WIN!' : result = "YOU LOSE!";
                break;
        }
    }

    playerChoice.textContent = `Player: ${playerSelection}`;
    computerChoice.textContent = `Computer: ${computerSelection}`;
    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove('winner', 'loser', 'tie');

    switch (result) {
        case 'YOU LOSE!':
            resultDisplay.classList.add('loser');
            compscore++;
           computerScore.textContent = `${compscore}`;
            break;
        case 'YOU WIN!':
            resultDisplay.classList.add('winner');
            playerscore++;
            playerScore.innerText = `${playerscore}`
            break;
        case 'ITS A TIE!':
            resultDisplay.classList.add('tie');
            break;
    }
}
