let age = 20;
let message1 = age >= 18 ? "You're an adult" : "You're minor";
console.log(message1);

let time = 13;
let message2 = time <= 12 ? 'Good Morning' : 'Good Afternoon';
console.log(message2);

let purchaseAmount = 100;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
);
