const textBox = document.getElementById('temperature');
const ToFahrenheit = document.getElementById('ToFahrenheit');
const ToCelsius = document.getElementById('ToCelsius');
const answer = document.getElementById('answer');
let tem;

function conversion() {
  if (ToFahrenheit.checked) {
    tem = Number(textBox.value);
    tem = (tem * 9) / 5 + 32;
    answer.textContent = tem.toFixed(1) + ' °F';
  } else if (ToCelsius.checked) {
    tem = Number(textBox.value);
    tem = ((tem - 32) * 5) / 9;
    answer.textContent = tem.toFixed(1) + ' °C';
  } else {
    answer.textContent = 'Please select a unit';
  }
}
