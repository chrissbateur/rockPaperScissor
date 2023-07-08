const humanT = document.querySelector("#humanT");
const pcT = document.querySelector("#pcT");
const resT = document.querySelector("#resT");
const btnChoice = document.querySelectorAll(".btnChoice");

let player;
let pc;
let result;
let numPlays = 0; // Variable to keep track of the number of plays
let playerWins = 0; // Variable to keep track of player wins
let computerWins = 0; // Variable to keep track of computer wins

btnChoice.forEach(button => button.addEventListener("click", () => {
    if (numPlays < 5) {
        player = button.textContent;
        pcTurn();


        humanT.textContent = `Player: ${player}`;
        pcT.textContent = `Computer: ${pc}`;
        result = WinnetTest();

        resT.textContent = result;
        updateScore(result);

        numPlays++;

        
        if (numPlays === 5) {
            setTimeout(() => {
                resT.textContent = `Player Wins: ${playerWins} || Computer Wins: ${computerWins}`;
            }, 800);
            
        }
        
    }
}));

function WinnetTest() {
    if (player === pc) {
        return "Draw!";
    } else if (pc === "ROCK") {
        return (player === "PAPER") ? "You Win!" : "You Lose!";
    } else if (pc === "PAPER") {
        return (player === "SCISSORS") ? "You Win!" : "You Lose!";
    } else if (pc === "SCISSORS") {
        return (player === "ROCK") ? "You Win!" : "You Lose!";
    }
}

function pcTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            pc = "ROCK";
            break;
        case 2:
            pc = "PAPER";
            break;
        case 3:
            pc = "SCISSORS";
            break;
    }
}

function updateScore(result) {
    if (result === "You Win!") {
        playerWins++;
    } else if (result === "You Lose!") {
        computerWins++;
    }
}
