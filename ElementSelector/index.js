//  Element Selector = method use to target and manipulate HTML elements
//                     They allow you to select one or manipulate HTML elements
//                     From the DOM ( Document Object Model )

// 1. document.getElementById()             // Element or Null
// 2. document.getElementByClassName()      // HTML Collection
// 3. document.getElementByTagName          // HTML Collection
// 4. document.querySelector()              // Element or Null
// 5. document.querySelectorAll()           // Node List

// Document.getElementById()

const username = ' Neou Sokheng';
const welcomeMsg = document.getElementById('welcome');

welcomeMsg.textContent += username === '' ? 'Guest' : username;

welcomeMsg.style.backgroundColor = 'green';
welcomeMsg.style.textAlign = 'center';

// Document.getElementByClassName()

const fruits = document.getElementsByClassName('fruits');

fruits[0].style.backgroundColor = `red`;
fruits[1].style.backgroundColor = `yellow`;
fruits[2].style.backgroundColor = `orange`;

Array.from(fruits).forEach((fruits) => {
  fruits.style.color = 'Blue';
});

console.log(fruits);

// document.getElementByTagName()

const h4Element = document.getElementsByTagName('h4');
const list = document.getElementsByTagName(`li`);

h4Element[0].style.backgroundColor = 'cyan';

Array.from(h4Element).forEach((h4Element) => {
  h4Element.style.backgroundColor = 'cyan';
});

for (let i of h4Element) {
  i.style.color = 'brown';
}

Array.from(list).forEach((list) => {
  list.style.backgroundColor = 'Purple';
});
list[0].style.backgroundColor = 'Gray';

// document.querySelector()  * select one single element which is the first one

const element = document.querySelector('h3');

element.style.backgroundColor = 'lightgreen';

// 5. document.querySelectorAll()

const closing = document.querySelectorAll('h3');

closing.forEach((closing) => {
  closing.style.backgroundColor = 'lightBlue';
});
console.log(closing);
