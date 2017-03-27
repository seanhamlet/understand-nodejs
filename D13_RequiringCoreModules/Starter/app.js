// don't need ./ bc ./ tells to look in folder that i am in
var util = require('util');

var name = 'Sean';
var greeting = util.format('Hello, %s', name);
util.log(greeting); // same as console.log, but adds timestamp
