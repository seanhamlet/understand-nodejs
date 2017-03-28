var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello world!';

}

// give Greetr access to EventEmitter methods and properties
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
  console.log(this.greeting + ': ' +  data);
  // pass `data` to all listeners of `greet` event
  this.emit('greet', data)
};

// create new `Greetr` object
var greeter1 = new Greetr();

// listener for `greet` event
greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' +  data);
})

// the `greet` function is invoked
// within the `greet` function the `emit` method is looked for, it's not found on
// the `Greetr` object so it looks down the prototype chain to the `EventEmitter`
// and finds the `emit` method
// the same thing happens for the `on` method

// in Summary
// `greet` is from `Greetr`
// `emit` and `on` are from `EventEmitter`
// `Greetr` has access to `emit` and `on` through prototype chain due to
// inheriting from 'EventEmitter'
greeter1.greet('Sean');
