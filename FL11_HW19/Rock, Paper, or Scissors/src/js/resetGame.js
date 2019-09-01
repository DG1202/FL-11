import {
  computerScore,
  gameInfo,
  userScore,
  gameLogs,
  buttons,
  congratulation,
} from './variables';

const gameReset = () => {
  gameInfo.user = 0;
  gameInfo.comp = 0;
  gameInfo.round = 0;
  computerScore.innerHTML = gameInfo.comp;
  userScore.innerHTML = gameInfo.user;
  gameLogs.innerHTML = '';
  congratulation.style.display = 'none';
  buttons.style.display = 'block';
};

export default gameReset;
