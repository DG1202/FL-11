import computerChoise from './computerChoise';
import gameReset from './resetGame';
import gameRound from './gameRound';
import {gameInfo, reset, buttons, congratulation} from './variables';

const startRound = (variants, variant) => {
  const computer = computerChoise(variants);
  reset.onclick = gameReset;
  gameInfo.round += 1;
  gameRound(computer, variant);
  if (gameInfo.user === 3 || gameInfo.comp === 3) {
    const winner =
      gameInfo.user > gameInfo.comp
        ? `User WON the game!!!!`
        : `Computer WON the game!!!!`;
    buttons.style.display = 'none';
    congratulation.innerHTML = winner;
    congratulation.style.display = 'block';
  }
};

export default startRound;
