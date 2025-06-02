// string methods
let username = 'Akuma';

let result1 = username.startsWith(' ');
let result2 = username.endsWith(' ');

if (result1 || result2) {
  console.log('Your username should not start or end with space');
} else {
  console.log(username);
}

let username1 = 'Akuma';
let result3 = username1.includes(' ');

if (result3) {
  console.log('Your username should not contain space');
} else {
  console.log(username1);
}

let phone_number = '123-123-123-123';
let result_phone = phone_number.replaceAll('-', ' ');
console.log(result_phone);
