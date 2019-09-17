import {gameInfo} from './variables';

const getRoundWinner = (computer, variant) => {
  if (
    (computer === 'Rock' && variant === 'Paper') ||
    (computer === 'Scissors' && variant === 'Rock') ||
    (computer === 'Paper' && variant === 'Scissors')
  ) {
    gameInfo.user += 1;
    return 'You’ve WON!';
  }
  if (
    (computer === 'Paper' && variant === 'Rock') ||
    (computer === 'Rock' && variant === 'Scissors') ||
    (computer === 'Scissors' && variant === 'Paper')
  ) {
    gameInfo.comp += 1;
    return 'Computer WON!';
  }
  return 'draw';
};

export default getRoundWinner;
