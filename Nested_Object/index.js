person1 = {
  Fullname: 'Neou Sokheng',
  age: 19,
  IsStudent: true,
  address: {
    Country: 'Cambodia',
    City: 'Phnom Penh',
    Street: '13 E0E1 10',
  },
};

console.log(person1.Fullname);
console.log(person1.age);
console.log(person1.IsStudent);
console.log(person1.address.Street);

for (let i in person1.address) {
  console.log(person1.address[i]);
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person2 = new Person('Heng Heng', 29, '19EE', 'KPS', 'Cambodia');
const person3 = new Person('Neou Heng', 39, '19E5', 'PP', 'Cambodia');

console.log(person2.address.street);
console.log(person3.address.street);
