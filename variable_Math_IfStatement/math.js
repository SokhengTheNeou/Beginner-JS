let x = 3.5;
let y = 2;
let a = 81;
let b = 90;
let z;

z = Math.round(x); // round to the nearest integer  example 3.4 = 3, 3.5 = 4
console.log(z);

z = Math.floor(x); //floor determine the smallest interger example 3.4 = 3, 3.9 = 3
console.log(z);

z = Math.ceil(x); // ceil determine the largest integer example 3.4 = 4, 3.9 = 4
console.log(z);

z = Math.trunc(x, y); // trunc remove the decimal part of a number example 3.5 = 3
console.log(z);

z = Math.pow(y, x); // pow determine the power of a number example 2^3.5 = 11.313708498984761 (Svay Kun)
console.log(z);

z = Math.sqrt(a); // sqrt determine the square root of a number example sqrt(3.5) = 1.8708286933869707
console.log(z);

z = Math.log(x); // log determine the natural logarithm of a number example log(3.5) = 1.252762968495368
console.log(z);

z = Math.sin(b); // sin determine the sine of a number example sin(3.5) = -0.35078322768961984
console.log(z);

z = Math.cos(b); // cos determine the cosine of a number example cos(3.5) = -0.9364566872907963
console.log(z);

z = Math.abs(x); // abs determine the absolute value of a number example abs(-3.5) = 3.5
console.log(z);

z = Math.sign(b); // sign determine the sign of a number example sign(-3.5) = -1
console.log(z);

z = Math.min(x, y, b, a); // min determine the smallest number example min(3.5, 2, 90, 81) = 2
console.log(z);

z = Math.max(x, y, b, a); // max determine the largest number example max(3.5, 2, 90, 81) = 90
console.log(z);
