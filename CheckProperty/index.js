const mysubmit = document.getElementById('mysubmit');
const MyCheckbox = document.getElementById('MyCheckbox');
const visabtn = document.getElementById('visabtn');
const MasterCardbtn = document.getElementById('MasterCardbtn');
const Paypalbtn = document.getElementById('Papalbtn');

const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mysubmit.onclick = function () {
  if (MyCheckbox.checked) {
    subResult.textContent = 'You are Suscribed';
  } else {
    subResult.textContent = 'You are not Suscribed';
  }
  if (visabtn.checked) {
    paymentResult.textContent = 'You are paying with Visa Card';
  } else if (MasterCardbtn.checked) {
    paymentResult.textContent = 'You are paying with Master Card';
  } else if (Paypalbtn.checked) {
    paymentResult.textContent = 'You are paying with Paypal';
  } else {
    paymentResult.textContent = ' You must select a payment type';
  }
};
