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

function playRound(playerSelection, computerSelection) {

    while (true) {
        if (playerSelection == "paper" || playerSelection == "rock" || playerSelection == "scissors") {
            break;
        }
        else{
            console.error("WRONG INPUT!");
            console.warn("Try again");
            playerSelection = prompt().toLowerCase();
        }
    }
    let result = "[P1:" + playerSelection + "| PC:" + computerSelection + "]";
    
    if (playerSelection === computerSelection) {
        console.log("Round draw " + result);
    }
    if (playerSelection === "paper" && computerSelection === "scissors"|| playerSelection == "rock" && computerSelection === "paper" || playerSelection == "scissors" && computerSelection === "rock"){
        pcScore++;
        console.log("PC won "  + result);
    }
    else{
        playerScore++;
        console.log("Player won " + result);
    }
    
}

let pcScore = 0;
let playerScore = 0;

function game() {
    console.info("Type paper or scissors or rock");
    pcScore = 0;
    playerScore = 0;

    for (let index = 0; index < 5; index++) {

        playRound(prompt().toLowerCase(), getComputerChoice());

        if (pcScore >= 3) { return "PC is Victorious"; }

        if(playerScore >= 3){ return "Player is Victorious"; }
    }
    return "I cant.. its all draw..";
}