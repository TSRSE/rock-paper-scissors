let pcScore = 0;
let playerScore = 0;

let computerSelection = "?";
let playerSelection = "?";

const textScore = document.querySelector('.scores');
textScore.textContent = `${playerScore} | ${pcScore}`;

const textConditions = document.querySelector('.conditions');
textConditions.textContent = `You: ${playerSelection} | PC: ${computerSelection}`;

const buttonRock = document.querySelector('.rock');
buttonRock.onclick = () => playRound("rock", getComputerChoice());

const buttonPaper = document.querySelector('.paper');
buttonPaper.onclick = () => playRound("paper", getComputerChoice());

const buttonScissors = document.querySelector('.scissors');
buttonScissors.onclick = () => playRound("scissors", getComputerChoice());

function getComputerChoice(){
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "paper";
        case 1:
            return "scissors";
        case 2:
            return "rock";
    }
}

function getIsGameEnded(){
    return pcScore > 4 || playerScore > 4;
}

function dropStats(){
    pcScore = 0;
    playerScore = 0;
    textConditions.textContent = `You: ${playerSelection} | PC: ${computerSelection}`;
    textScore.textContent = `You: ${playerScore} | PC: ${pcScore}`;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) 
    { 
        textConditions.textContent = `Draw`;
        return;
    }

    if (playerSelection === "paper" && computerSelection === "scissors"|| playerSelection == "rock" && computerSelection === "paper" || playerSelection == "scissors" && computerSelection === "rock"){
        pcScore++;
    }
    else {playerScore++;}

    textConditions.textContent = `You: ${playerSelection} | PC: ${computerSelection}`;
    textScore.textContent = `You: ${playerScore} | PC: ${pcScore}`;

    if (getIsGameEnded()) {
        alert(`Game Ended! Winner is ${playerScore > 4 ? "Player" : "PC"}`);
        dropStats();
    }
}