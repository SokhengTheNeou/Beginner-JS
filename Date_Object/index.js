const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

console.log(date);
console.log(year);
console.log(month);
console.log(day);

date.setFullYear(2026);
date.setMonth(0);
date.setDate(29);
console.log(date);

const hbd = new Date('2026-01-29');
const day1 = new Date('');
i = true;
if (hbd > date) {
  console.log('Happy birthday Heng!');
} else {
  console.log('Not Yet Birthday');
}
