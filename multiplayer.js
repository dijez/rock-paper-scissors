document.addEventListener('DOMContentLoaded', () => {
    const player1Display = document.getElementById("player1Display");
    const player2Display = document.getElementById("player2Display");
    const resultDisplay = document.getElementById("resultDisplay");
    const player1ScoreDisplay = document.getElementById("player1ScoreDisplay");
    const player2ScoreDisplay = document.getElementById("player2ScoreDisplay");

     // Event listeners for player 1
     document.getElementById('rockButton1').addEventListener('click', () => playGame1('rock'));
     document.getElementById('paperButton1').addEventListener('click', () => playGame1('paper'));
     document.getElementById('scissorsButton1').addEventListener('click', () => playGame1('scissors'));
 
     // Event listeners for player 2
     document.getElementById('rockButton2').addEventListener('click', () => playGame2('rock'));
     document.getElementById('paperButton2').addEventListener('click', () => playGame2('paper'));
     document.getElementById('scissorsButton2').addEventListener('click', () => playGame2('scissors'));
    let player1Score = 0;
    let player2Score = 0;

    let player1Choice;
    let player2Choice;

    function playGame1(choice) {
        player1Choice = choice;
        player1Display.textContent = `PLAYER 1: ${player1Choice}`; 
        if (player2Choice) {
            determineWinner();
        }
    }

    function playGame2(choice) {
        player2Choice = choice;
        player2Display.textContent = `PLAYER 2: ${player2Choice}`;
        if (player1Choice) {
            determineWinner();
        }
    }

    function determineWinner() {
        let result;
        if (player1Choice === player2Choice) {
            result = "It's a Tie!";
        } else {
            switch (player1Choice) {
                case "rock":
                    result = (player2Choice === "scissors") ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!";
                    break;
                case "paper":
                    result = (player2Choice === "rock") ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!";
                    break;
                case "scissors":
                    result = (player2Choice === "paper") ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!";
                    break;
            }
        }
        
        resultDisplay.textContent = result;

        // Update scores
        if (result === "PLAYER 1 WINS!") {
            player1Score++;
            player1ScoreDisplay.textContent = player1Score;
        } else if (result === "PLAYER 2 WINS!") {
            player2Score++;
            player2ScoreDisplay.textContent = player2Score;
        }
    }

   
});