// function statement
function greet() {
  console.log('hi');
}
greet();

// functions are first-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression (anonymous function because of no-name as in above two)
var greetMe = function() {
  console.log('Hi Sean');
};
greetMe();

// it's still first-class
logGreeting(greetMe);

// use a function expression on the fly

logGreeting(function() {
  console.log('Hello Sean!');
})
