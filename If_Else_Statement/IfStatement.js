// let haslicense = true;
// if (age >= 18) {
//   console.log('You are eligible to apply for a driving license');

//   if (haslicense) {
//     console.log('You already have a driving license');
//   } else {
//     console.log('You do not have a driving license');
//   }
// } else {
//   console.log('You are not eligible to apply for a driving license');
// }

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
resultElement = document.getElementById('resultElement');
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = 'You are too old enough to enter this site';
  } else if (age < 0) {
    resultElement.textContent = 'Age can not be negative';
  } else if (age >= 18) {
    resultElement.textContent = 'You are old enough to enter this site';
  } else if (age == 0) {
    resultElement.textContent =
      'You are a new born baby, cannot enter this site';
  } else if (age < 18) {
    resultElement.textContent = 'You are not old enough to enter this site';
  } else {
    resultElement.textContent = 'You must be 18+ to enter this site';
  }
};
