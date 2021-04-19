let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when no input
  if (!guess) {
    displayMessage('No number enetered!');
  //when the player wins  
  } else if (guess === number) {
    displayMessage('CORRECT!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when the guess is too high  
  } else if (guess !== number) {
    displayMessage(guess > number ? 'Too high!' : 'Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game!')
  }
 
   
});


document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  number = Math.trunc(Math.random()*20)+1;
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black'
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
