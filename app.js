const p1 = {
  score: 0,
  button: document.querySelector('#player1Button'),
  display: document.querySelector('#player1Display'),
};

const p2 = {
  score: 0,
  button: document.querySelector('#player2Button'),
  display: document.querySelector('#player2Display'),
};

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

player1Btn.addEventListener('click', function () {
  updateScores(p1, p2);
});

player2Btn.addEventListener('click', function () {
  updateScores(p2, p1);
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
  player1Btn.disabled = false;
  player2Btn.disabled = false;
}
