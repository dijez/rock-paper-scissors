document.addEventListener('DOMContentLoaded', () => {
    const player1Display = document.getElementById("player1Display");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay");
    const player1ScoreDisplay = document.getElementById("player1ScoreDisplay");
    const computerScoreDisplay = document.getElementById("computerScoreDisplay");

    // Event listeners for player
    document.getElementById('rockButton1').addEventListener('click', () => playGame('rock'));
    document.getElementById('paperButton1').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissorsButton1').addEventListener('click', () => playGame('scissors'));

    let player1Score = 0;
    let computerScore = 0;

    let player1Choice;
    let computerChoice;

    function playGame(choice) {
        player1Choice = choice;
        player1Display.textContent = `PLAYER: ${player1Choice}`; 

        // Generate computer's choice randomly
        const choices = ['rock', 'paper', 'scissors'];
        computerChoice = choices[Math.floor(Math.random() * 3)];
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

        determineWinner();
    }

    function determineWinner() {
        let result;
        if (player1Choice === computerChoice) {
            result = "It's a Tie!";
        } else {
            switch (player1Choice) {
                case "rock":
                    result = (computerChoice === "scissors") ? "PLAYER WINS!" : "COMPUTER WINS!";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "PLAYER WINS!" : "COMPUTER WINS!";
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "PLAYER WINS!" : "COMPUTER WINS!";
                    break;
            }
        }
        
        resultDisplay.textContent = result;

        // Update scores
        if (result === "PLAYER WINS!") {
            player1Score++;
            player1ScoreDisplay.textContent = player1Score;
        } else if (result === "COMPUTER WINS!") {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    }
});
