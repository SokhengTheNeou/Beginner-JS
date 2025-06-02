// let username;

document.getElementById('mySubmit').onclick = function () {
  username = document.getElementById('myText').value;
  document.getElementById('myH1').textContent = `Hello + ${username}`;
};

// Const = A variale that cannot be reassigned

const pi = 3.14;
let raduis;
let circumference;

document.getElementById('mySubmit').onclick = function () {
  raduis = document.getElementById('myText').value;
  raduis = Number(raduis);
  circumference = 2 * pi * raduis;
  document.getElementById('myH3').textContent = circumference;
};
