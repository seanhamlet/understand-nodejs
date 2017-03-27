// third pattern, use a function constructor to create an new object
function Greetr() {
  this.greeting = 'Hello world!!';
  this.greet = function() {
    console.log(this.greeting);
  };
}

module.exports = new Greetr();
