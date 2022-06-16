const player1Btn = document.querySelector('#player1Button');
const player2Btn = document.querySelector('#player2Button');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#player1Display');
const p2Display = document.querySelector('#player2Display');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

player1Btn.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-success');
      p2Display.classList.add('has-text-danger');
    }
    p1Display.textContent = p1Score;
  }
});

player2Btn.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
    }
    p2Display.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-success', 'has-text-danger');
}
