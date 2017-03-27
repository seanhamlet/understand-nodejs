var greet = require('./greet1');
greet();

// explicitly say what you are looking for coming off of module.exports
var greet2 = require('./greet2').greet;
greet2();

// create a new object with function constructor
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// greet3b ends up being the same object as greet3
// this is because the `require` function caches the original greet3 require
// and since the object that comes back from the original greet 3 require is an
// object, it is passed by reference and thus, if it gets changed, it will be
// reflected in greet3b

// therefore, module.exports is really only set one time, which is really
// efficient
var greet3b = require('./greet3');
greet3b.greet();

// constructor functions are capitalized
// get new constructor function (Greet4)
// create new object grtr
var Greet4 = require('./greet4');
var grtr = new Greet4;
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();
