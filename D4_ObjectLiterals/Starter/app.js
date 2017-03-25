var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname)
  }
};

// access object values using dot
person.greet();
// or bracket notation
console.log(person['firstname']);
