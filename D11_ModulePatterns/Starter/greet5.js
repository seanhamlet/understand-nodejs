// revealing module pattern

// greeting variable is protected because not exported
var greeting = 'Hello world!!!!';

function greet() {
  console.log(greeting);
}

// only exposing the greet function, not the greetings variable (I think this is an example of closure)
// when greet function is returned, I won't have direct access to the greetings variables
module.exports = {
  greet: greet
}
