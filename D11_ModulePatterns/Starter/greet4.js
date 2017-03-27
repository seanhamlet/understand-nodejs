// forth pattern, return in exports object the ability to create new object
function Greetr() {
  this.greeting = 'Hello world!!!';
  this.greet = function() {
    console.log(this.greeting);
  };
}

module.exports = Greetr;
