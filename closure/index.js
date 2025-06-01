// closure is a function defined inside of another funciton, the inner function has access
//          to the variable and scope of the outer function,
//          allow for private variables and state maintenance
//          used Frequently in JS framework: React, Vue, angular

// Example 1

function counterIncrement() {
  let count = 0;
  function increment() {
    count++;
    console.log(`count increased to ${count}`);
  }

  function getcount() {
    return count;
  }
  return { increment, getcount };
}

const counter = counterIncrement();

counter.increment();
counter.increment();
counter.increment();

counter.increment();

console.log(`The current count is ${counter.getcount()}`);

// Example 2

function createGame() {
  let score = 0;
  function increasePoint(point) {
    score += point;
    console.log(`+${point}pts`);
  }

  function decreasePoint(point) {
    score -= point;
    console.log(`-${point}pts`);
  }

  function getPoint() {
    return score;
  }

  return { increasePoint, decreasePoint, getPoint };
}

const game = createGame();

game.increasePoint(5);
game.increasePoint(4);
game.decreasePoint(2);

console.log(`The final score is ${game.getPoint()}`);
