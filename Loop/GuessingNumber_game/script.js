const min = 1;
const max = 1000;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let guess;
let running = true;
let attempts = 0;

while (running) {
  guess = window.prompt(`Guess a number between ${min} and ${max}`);
  guess = Number(guess);
  if (guess < min || guess > max) {
    window.alert(`Please enter a number between ${min} and ${max}`);
  } else if (isNaN(guess)) {
    window.alert('Please enter a valid number');
  } else {
    attempts++;
    if (guess > answer) {
      window.alert(`Your guess is too High!`);
    } else if (guess < answer) {
      window.alert(`Your guess is too Low!`);
    } else {
      window.alert(
        `Congratulations! You guessed the number in ${attempts} attempts`
      );

      running = false;
    }
  }
}
