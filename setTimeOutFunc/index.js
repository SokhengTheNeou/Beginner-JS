let timeID;
function startTime() {
  timeID = setTimeout(() => window.alert(`Hello`), 3000);

  console.log('Started');
}

function clearTime() {
  clearTimeout(timeID);
  console.log(`Cleared`);
}
