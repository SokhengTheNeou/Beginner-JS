const display = document.getElementById('display-timer');
let timer = null;
let starttime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    starttime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - starttime;
    isRunning = false;
  }
}
function reset() {
  clearInterval(timer);
  starttime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = '00:00:00:00';
}
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - starttime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (100 * 60)) % 60);
  let second = Math.floor((elapsedTime / 1000) % 60);
  let millsecond = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  second = String(second).padStart(2, '0');
  millsecond = String(millsecond).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${second}:${millsecond}`;
}
