// String sLicing = creating a substring from a portion of another string
//                  string.slice(start, end)

let full_name = 'Neou Sokheng';
let first_name = full_name.slice(full_name.indexOf(' ') + 1);
let last_name = full_name.slice(0, full_name.indexOf(' '));

console.log(first_name);
console.log(last_name);

let email = 'Sokheng@gmail.com';
let username = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@') + 1);

console.log(username);
console.log(extension);

// Chaining string methods

let username1 = window.prompt('Enter you username');

username1 =
  username1.trim().charAt(0).toUpperCase() +
  username1.trim().slice(1).toLowerCase();
console.log(username1);
