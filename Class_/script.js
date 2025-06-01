class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`The product: ${this.name}`);
    console.log(`The price: $${this.price.toFixed(2)} `);
  }

  calculate() {
    return this.price * (this.price * salesTax);
  }
}

const salesTax = 0.05;

const product1 = new Product('Hoodies', 20);
const product2 = new Product('Jacket', 40);

const total = product1.calculate(salesTax);
console.log(`Total price of ${product1.name} with tax: $${total.toFixed(2)}`);

product1.display();

product2.display();

// Stastic is keyword to defines properterties or method that belong
//     to a class itself rather then the object created from that class
//       (Class own anything static, not the object)

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  static getUserCount() {
    console.log(`There are ${User.userCount} users online! `);
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User('Heng');
const user2 = new User('Sok');
const user3 = new User('Neou');

console.log(user1.username);
user2.sayHello();

console.log(User.userCount);

User.getUserCount();

class DateHelper {
  static format(date) {
    return date.toISOString().split('T')[0].replaceAll('-', ' ');
  }
}

const today = new Date();

console.log(DateHelper.format(today));

// inheritance allow a new class inherit properties and method from a existing class

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
  speeak() {
    console.log(`${this.name} is make a sound`);
  }
}
class Tiger extends Animal {
  name = 'Tiger';
  run() {
    console.log(`This ${this.name} is Running`);
  }
  speak() {
    console.log(`${this.name} ROAR!`);
  }
}
class Cat extends Animal {
  name = 'Cat';
  playing() {
    console.log(`This ${this.name} is playing`);
  }
}

class Dog extends Animal {
  name = 'Dog';
}

const tiger = new Tiger();
const cat = new Cat();
const dog = new Dog();

tiger.eat();
tiger.run();
tiger.speak();

console.log(tiger.alive);

cat.eat();
cat.playing();

// Super = keyword is used in class to call the constructor or accessthe properties and method
//          of a parent (SuperClass)
//          this = this object
//          super = the parent

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(
      `My name is ${this.name}, I am ${this.age} Years old, and I can ${this.talent}`
    );
  }
}

class Heng extends Student {
  constructor(name, age, talent) {
    super(name, age);

    this.talent = talent;
  }
}

class Hap extends Student {
  constructor(name, age, talent) {
    super(name, age);

    this.talent = talent;
  }
}
const heng = new Heng('Neou Sokheng', 19, 'swim');
const hap = new Hap('Chhay Layhap', 18, 'play game');

console.log(heng.talent);

heng.introduce();
hap.introduce();

// setter = set is special method that make properties readable
// getter = get is special method that make properties writeable

// Validate and modify a value when reading/writing a properties

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else console.error('Width must be a positive number');
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else console.error('Height must be a positive number');
  }

  get width() {
    return `${this._width.toFixed(2)}cm`;
  }
  get height() {
    return `${this._height.toFixed(2)}cm`;
  }
  get area() {
    const result = (this._width * this._height).toFixed(2);
    return `The area of rectangle is ${result}cm`;
  }
}

const rectangle = new Rectangle(9, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Introduction {
  constructor(FirstName, LastName, Age) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age = Age;
  }
  set FirstName(newFirstName) {
    if (typeof newFirstName === 'string' && newFirstName.length > 0) {
      this._FirstName = newFirstName;
    } else {
      console.error(`Firstname must be non-empty string`);
    }
  }

  set LastName(newLastName) {
    if (typeof newLastName === 'string' && newLastName.length > 0) {
      this._LastName = newLastName;
    } else {
      console.error(`Lastname must be non-empty string`);
    }
  }
  set Age(newAge) {
    if (typeof newAge === 'number' && newAge > 0) {
      this._Age = newAge;
    } else {
      console.error(`Age must be positive number`);
    }
  }

  get FirstName() {
    return this._FirstName;
  }

  get LastName() {
    return this._LastName;
  }
  get Age() {
    return this._Age;
  }
  get fullname() {
    return `My full name is ${this._FirstName + ' ' + this._LastName} `;
  }
}

const introduction = new Introduction('Heng', 'Neou', 19);

console.log(introduction.FirstName);
console.log(introduction.LastName);
console.log(introduction.Age);
console.log(introduction.fullname);
