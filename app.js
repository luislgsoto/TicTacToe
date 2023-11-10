// app.js

const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Handle cell click event here
    // Check if the cell is empty
    if (!cell.textContent) {
      // Set the player's symbol in the cell
      cell.textContent = currentPlayer;
        const winnerCombination = checkWinner()
      // Switch to the other player
      if (winnerCombination) {
        highlightWinnerCells(winnerCombination);
        alert(`Player ${currentPlayer} wins!`);
        // Optionally, restart the game here
      } else {
        // Check for a draw
        if (isBoardFull()) {
          alert("It's a draw!");
          // Optionally, restart the game here
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    }
    console.log(`Clicked on cell with ID: ${cell.id}`);
  });
});
// app.js

const restartButton = document.getElementById("restartButton");

// Function to reset the game board
function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = ""; // Clear the content of each cell
    cell.classList.remove('winner'); // Remove the winner class
  });
  currentPlayer = "X"; // Reset the current player
}

// Event listener for the restart button
restartButton.addEventListener("click", resetGame);

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer
        ) {
            return combination; // Return the winning combination
        }
    }

    return null; // No winner
}

function isBoardFull() {
  // Check if every cell is filled
  return Array.from(cells).every((cell) => cell.textContent);
}

function highlightWinnerCells(winnerCombination) {
    winnerCombination.forEach(index => {
        cells[index].classList.add('winner');
    });
}