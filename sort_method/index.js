// Sort() = method use to sort elements of an array in place.
//          Sorts elements as string in lexicographic order, not
//          lexicographic = (Alphabet + numbers + symbols) as string
console.log('Sort Method');

let fruits = ['apple', 'orange', 'pineapple', 'banana', 'watermelon'];

fruits.sort();

console.log(fruits);

let numbers = [1, 4, 5, 7, 3, 2, 0, 10, 24, 8];
numbers.sort((a, b) => a - b);

console.log(numbers);

let student = [
  { name: 'Neou', age: 19, gpa: 3.64 },
  { name: 'Sok', age: 10, gpa: 3.9 },
  { name: 'Dom', age: 23, gpa: 3.6 },
  { name: 'Leang', age: 30, gpa: 3.24 },
  { name: 'Heng', age: 29, gpa: 4 },
];

student.sort((a, b) => a.age - b.age);
console.log(student);

student.sort((a, b) => a.gpa - b.gpa);
console.log(student);

student.sort((a, b) => a.name.localeCompare(b.name));
console.log(student);
