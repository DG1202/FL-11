let startAttemptPrize = 100;
let currentAttemptPrize = startAttemptPrize;
let prize = 0;
let guessed = false;
let startlastRangeNumber = 8;
let lastRangeNumber = startlastRangeNumber;
const nextRangeNumbDiff = 4;
let play = confirm('Do you want to play a game?');
const attempts = 3;
const two = 2;
const Quarter = 4;

if(play) {
  while(play) {
    const number = Math.floor(Math.random() * lastRangeNumber);
    for(let i = attempts; i > 0; i--) {
      const usersNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${lastRangeNumber}
Attempts left: ${i}
Total prize: ${prize}
Possible prize in current attempt: ${currentAttemptPrize}`, ''));
      guessed = false;
      if(usersNumber === number) {
        guessed = true;
        if(i === attempts) {
          prize += currentAttemptPrize;
          break;
        }else if(i === two) {
          prize += currentAttemptPrize / two;
          break;
        }else {
          prize += currentAttemptPrize / Quarter;
          break;
        }
      }
    }
    if(guessed) {
      play = confirm('Congratulation, you won!   Your prize is: ' + prize + '$ Do you want to continue?');
      if(play) {
        currentAttemptPrize = currentAttemptPrize * two;
        lastRangeNumber = lastRangeNumber + nextRangeNumbDiff;
      }else {
        alert('Thank you for your participation. Your prize is: ' + prize + '$');
        prize = 0;
        currentAttemptPrize = startAttemptPrize;
        lastRangeNumber = startlastRangeNumber;
        play = confirm('Do you want to play again?');
      }
    }else {
      alert('Thank you for your participation. Your prize is: ' + prize + '$');
      play = confirm('Do you want to play again?');
      if(play) {
        prize = 0;
        currentAttemptPrize = startAttemptPrize;
        lastRangeNumber = startlastRangeNumber;
      }
    }
  }  
}else {
  alert('You did not become a millionaire, but can.');
}