const player1Btn = document.querySelector('#player1Button');
const player2Btn = document.querySelector('#player2Button');
const p1Display = document.querySelector('#player1Display');
const p2Display = document.querySelector('#player2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

player1Btn.addEventListener('click', function () {
  if (p1Score !== winningScore) {
    p1Score++;
    p1Display.textContent = p1Score;
  }
});

player2Btn.addEventListener('click', function () {
  if (p2Score !== winningScore) {
    p2Score++;
    p2Display.textContent = p2Score;
  }
});
