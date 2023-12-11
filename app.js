const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let result;
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 ); // or you can use possibleChoices.length
    console.log(randomNumber);

    if(randomNumber === 0) {
        computerChoice = 'rock';
    } else if(randomNumber === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () => {
    const win = 'You win';
    const lost = 'You lost';

    if (userChoice === computerChoice) {
        result = 'Draw';
    } else if ((userChoice === 'paper' && computerChoice === 'scissor') || (userChoice === 'scissor' && computerChoice === 'rock') || (userChoice === 'rock' && computerChoice === 'paper')) {
        result = lost;
    } else if ((userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissor' && computerChoice === 'paper') || (userChoice === 'rock' && computerChoice === 'scissor')) {
        result =  win;
    }

    resultDisplay.innerHTML = result;
}