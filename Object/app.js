const person1 = {
  FirstName: 'Sokheng',
  LastName: 'Neou',
  age: 19,
  FavFood: 'Pizza',
  eat: () => {
    console.log('I am eating Pizza');
  },
  SayHi: function () {
    console.log(`Hello, my name is ${this.FirstName}`); // this refers to the person object:
  },
};

console.log(person1.FirstName);
person1.SayHi();
person1.eat();
console.log(person1.FavFood);

const person2 = {
  FirstName: 'Mony Oudom',
  LastName: 'Neou',
  age: 25,
  FavFood: 'Hamburger',
  eat: () => {
    console.log('I am eating Hamburger');
  },

  fullname: function () {
    return this.FirstName + ' ' + this.LastName;
  },
};

console.log(person2.FirstName);
person2.eat();

console.log(person2.fullname());

// constructor is special method for difining the properties and method of object

function Car(model, year, color) {
  (this.model = model), (this.year = year), (this.color = color);
  this.drive = function () {
    console.log(`You  driving ${this.model}`);
  };
}

const car1 = new Car('Ford', 2025, 'Black');

console.log(car1.model);
car1.drive();

// Array in an Object

fruits = [
  { name: 'Apple', color: 'red', calories: 45 },
  { name: 'Banana', color: 'Yellow', calories: 103 },
  { name: 'Pineapple', color: 'Yellow', calories: 98 },
  { name: 'Watermelon', color: 'Green', calories: 109 },
  { name: 'Orange', color: 'orange', calories: 50 },
];

console.log(fruits[1].calories);

fruits.push({ name: 'Grapes', color: 'Green', calories: 100 });
console.log(fruits);

// Foreach method
console.log('For Each Method');
fruits.forEach((fruit) => console.log(fruit.name, fruit.color, fruit.calories));

// map() running through function and return into new array
console.log('Map Method');
const NameFruit = fruits.map((fruit) => fruit.name);
const ColorFruit = fruits.map((fruit) => fruit.color);

// Filter()  will return a new array after using each element and checking conditions
console.log('Filter Method');
const YellowFruit = fruits.filter(
  (fruit) => fruit.color.toLowerCase() === 'yellow'
);
const HighCalFruit = fruits.filter((fruit) => fruit.calories >= 100);
const LowCalFruit = fruits.filter((fruit) => fruit.calories < 100);
console.log(YellowFruit);
console.log(HighCalFruit);
console.log(LowCalFruit);

// Reduce()  will return a single value
console.log('Reduce Method');

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);

console.log(minFruit);

console.log(NameFruit);
console.log(ColorFruit);

// Sort() = method use to sort elements of an array in place.
//          Sorts elements as string in lexicographic order, not
//          lexicographic = (Alphabet + numbers + symbols) as string
console.log('Sort Method');

fruits.sort();
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);
