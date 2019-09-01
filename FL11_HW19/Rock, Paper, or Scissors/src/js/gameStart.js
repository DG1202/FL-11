import startRound from './startRound';
import {buttons} from './variables';

const gameStart = variants => {
  variants.forEach(variant => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = variant;
    button.onclick = startRound.bind(null, variants, variant);
    buttons.appendChild(button);
  });
};

export default gameStart;
