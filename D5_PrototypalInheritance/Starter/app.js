function Person(firstname, lastname) { // function constructor
  this.firstname = firstname;
  this.lastname = lastname;
}

// by using the new keyword, it makes the `this` variable an empty object, and
// automatically returns it

Person.prototype.greet = function () {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}; // this is the prototype of any objects created from Person, not the prototype of Person
// this method will be added to all objects created from the Person function constructor

var john = new Person('John', 'Doe');
john.greet(); // JS engine will search down prototype chain because there is no
              // greet method on john itself, but there is on its prototype

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
// prototype method should be the same for jane and john since they were both
// created from same function constructor
console.log(john.__proto__ === jane.__proto__);
