'use strict';
console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer🎉';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);
  console.log(guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
    score--;
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Answer🎉';
    displayMessage('Correct Answer🎉');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > 20 || guess < 0) {
    // document.querySelector('.message').textContent =
    //   'please enter between 1 to 20';
    displayMessage('please enter between 1 to 20');
    score--;
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Too high' : 'Too low';
      displayMessage(guess > number ? 'Too high' : 'Too low');
      score--;
    } else {
      score = 0;
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
    }
  }

  //  else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //   } else {
  //     score = 0;
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //   } else {
  //     score = 0;
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // }
  document.querySelector('.score').textContent = score;
  //   if (guess != number) {

  //   }
});

// the below way also works
// document.querySelector('.check').addEventListener('click', oncheck);
// function oncheck() {
//   console.log(document.querySelector('.guess').value);
// }

// the below way  dont work because in function expressions before function if we call we will get error
// document.querySelector('.check').addEventListener('click', oncheck);
// const oncheck = function () {
//   console.log(document.querySelector('.guess').value);
// };

// note : in function expresiion we wont be able call before function

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '16rem';
  //   document.querySelector('.number').textContent = number;
});
