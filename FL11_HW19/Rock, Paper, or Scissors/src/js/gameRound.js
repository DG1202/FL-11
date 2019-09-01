import {gameInfo, gameLogs, computerScore, userScore} from './variables';
import getRoundWinner from './getRoundWinner';

const gameRound = (computer, variant) => {
  const {round} = gameInfo;
  const gemeLog = document.createElement('li');
  gameLogs.appendChild(gemeLog);
  const roundWinner = getRoundWinner(computer, variant);
  const result = `Round ${round} ${variant} vs ${computer}, ${roundWinner}`;
  gemeLog.innerHTML = result;
  computerScore.innerHTML = gameInfo.comp;
  userScore.innerHTML = gameInfo.user;
};

export default gameRound;
