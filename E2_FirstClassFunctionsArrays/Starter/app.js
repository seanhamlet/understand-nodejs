// object properties and methods
var obj = {
  greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);
// create a string variable
var prop = 'greet';
// use variable in place of string to dynamically grab value of property or method
// using bracket notation
console.log(obj[prop]);

// functions and arrays
var arr = [];

// create array of functions, not the values the function returns, but the functions themselves
arr.push(function() {
  console.log('Hello world 1');
});
arr.push(function() {
  console.log('Hello world 2');
});
arr.push(function() {
  console.log('Hello world 3');
});

// invoke every function in array
arr.forEach(function(item) {
  item();
});
