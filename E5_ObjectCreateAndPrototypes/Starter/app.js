var person = {
  firstname: '',
  lastname: '',
  greet: function() {
    return this.firstname + ' ' + this.lastname;
  }
};

// creates object from person
// this will create an empty object 'john', whose prototype is 'person'
var john = Object.create(person);
// the prototype chain won't go looking down to 'person' to find 'firstname'
// property because it has been updated on 'john'
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

// the prototype chain will go down the chain to 'person' to find the 'greet'
// method for both 'john' and 'jane'
// both objects 'john' and 'jane' have access down the prototype chain to that
// method 'greet'
console.log(john.greet());
console.log(jane.greet());
