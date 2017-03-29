var obj = {
  name: 'John Doe',
  greet: function(param) {
    console.log(`Hello ${ this.name }`);
  }
};

obj.greet();
// whatever is passed as a parameter in .call will overwrite the `this` in the
// greet function
// essentially borrowing the function `greet` and giving it a new object to
// serve as the `this` keyword
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Jane Doe'});

// both .call and .apply let me change what the `this` keyword points to
// very powerful: can borrow methods and give object I want them to work on

// the main difference between `.call` and `.apply` is that for `.call` you pass
// parameters as just comma separated list
// e.g. obj.greet.call({name: 'Jane Doe'}, param1, param2);
// and for `.apply` you pass parameters as
// an array of parameters
// e.g. obj.greet.apply({name: 'Jane Doe'}, [param1, param2]);
