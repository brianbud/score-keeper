const player1Btn = document.querySelector('#player1Button');
const player2Btn = document.querySelector('#player2Button');
const p1Display = document.querySelector('#player1Display');
const p2Display = document.querySelector('#player2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

player1Btn.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

player2Btn.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
