function HBD() {
  console.log(`Happy Birthday to You!`);
  console.log(`Wish you all the best!`);
}
HBD();

function Introduce(name, age, year) {
  console.log(`Hello, my name is ${name}`);
  console.log(`I am ${age} years old`);
  console.log(`I am ${year} year computer science student`);
}

Introduce(' Neou Sokheng', 19, 2);

function plus(a, b) {
  return a + b;
}
console.log(plus(10, 5));

function minus(a, b) {
  return a - b;
}
console.log(minus(10, 5));

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

console.log(isEven(10));

function email(email) {
  if (email.includes(`@`)) {
    return true;
  } else {
    return false;
  }
}
console.log(email(`Heng@gmail.com`));

// Variable Scope = local scope vs global scope

x = 5;

function1();
function2();

function function1() {
  console.log(x);
}

function function2() {
  x = 20;
  console.log(x);
}

// callback function

sum(display, 10, 143);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function display(result) {
  console.log(result);
}

// express Function

const number = [1, 2, 3, 4, 5];
const square = number.map(function (element) {
  return Math.pow(element, 2);
});
console.log(square);

const cube = number.map(function (element) {
  return Math.pow(element, 3);
});
console.log(cube);

// Arrow Funtion

const number1 = [2, 3, 4, 5];
const square1 = number1.map((element) => Math.pow(element, 2));

console.log(square1);

const cube1 = number1.map((element) => Math.pow(element, 3));
console.log(cube1);
