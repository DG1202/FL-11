const gameInfo = {
  user: 0,
  comp: 0,
  round: 0,
};
const gameVariants = ['Rock', 'Paper', 'Scissors'];
const userScore = document.getElementById('score__user');
const computerScore = document.getElementById('score__computer');
const reset = document.getElementById('reset');
const gameLogs = document.getElementById('game-logs');
const buttons = document.getElementById('buttons-wrapper');
const congratulation = document.getElementById('winner-congr');

export {
  gameInfo,
  userScore,
  computerScore,
  reset,
  gameLogs,
  gameVariants,
  buttons,
  congratulation,
};
