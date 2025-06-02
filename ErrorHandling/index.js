// Error  = An object that is created to represent to the problem that occurs
//          Occur often with use input or Establishing a connection

// try{ } = Enclode code that might potentially cause an errors

// catch { } = Catch and Handle any thrown errors fromo try{ }

// finally { } = (optional) always executes. Use mostly for clean up.
//                ex. close files, close connection, release resources

try {
  const dividend = Number(window.prompt('Enter the dividend:'));
  const divided = Number(window.prompt('Enter the divided:'));

  const result = dividend / divided;
  console.log(result);
  if (divided == 0) {
    throw new Error("You can't divided by zero");
  }
  if (isNaN(divided) || isNaN(dividend)) {
    throw new Error('Value must be a number');
  }
} catch (error) {
  console.error(error);
} finally {
}

console.log(`the end`);
