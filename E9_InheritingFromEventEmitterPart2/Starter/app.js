var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	// EventEmitter is a function constructor, but I'm overwriting what the `this`
	// keyword is
	// this is aka 'super constructor' or constructor I am inheriting from
	EventEmitter.call(this);
	// since `this` is passed by reference, I can keep adding on my own properties
	// and methods
	this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
	console.log(this.greeting);
	this.emit('greet');
}

var greeter1 = new Greetr();

greeter1.on('greet', function() {
	console.log('Someone greeted!');
});

greeter1.greet();
