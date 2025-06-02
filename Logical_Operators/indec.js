// Logical Operators
// Logical AND = &&
// Logical OR = ||
// Logical NOT = !

let tem = 31;

if (tem <= 30 && tem >= 10) {
  console.log('The weather is good');
} else {
  console.log('The weather is bad');
}

let tem1 = 30;
if (tem1 > 30 || tem1 < 10) {
  console.log('The weather is bad');
} else {
  console.log('The weather is good');
}

let isSunny = true;

if (!isSunny) {
  console.log('It is cloudy');
} else {
  console.log('It is sunny');
}
