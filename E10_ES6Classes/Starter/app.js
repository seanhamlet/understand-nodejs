'use strict'; // adding this line will make JS engine more picky about what it lets you
// and doesn't let you do
// helps you not make silly mistakes, should be used in real production code
// also allows us to use newer features of JavaScript

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // any methods put in the class are automatically put in the prototype
  greet() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
