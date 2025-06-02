// Distucturing Extract value from array and object, then asign them to variable in a convenient way
// [] = to perform array destructuring
//  {} = to perform object destructuring

// Example 1 swap the value of 2 variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Exam2 swap element in Array

const color = ['red', 'white', 'purple', 'black'];
[color[0], color[3]] = [color[3], color[0]];
console.log(color);

//Example 3 Assign Array element to Variable
const [firstColor, secondColor, thirdColor, ...extraColor] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);

// Example 4 Extract Values from object

const person1 = {
  firstName: 'Heng',
  lastName: 'Neou',
  age: 19,
  job: 'Web Developer',
};

const person2 = {
  firstName: 'Tuu',
  lastName: 'Pii',
  age: 14,
};

const { firstName, lastName, age, job = 'Unemployed' } = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Example 5 Destructuring in Function Parameters

function displayPerson({ firstName, lastName, age, job = 'Unemployed' }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
