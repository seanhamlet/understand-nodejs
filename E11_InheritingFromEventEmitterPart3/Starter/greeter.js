'use strict';

var EventEmitter = require('events');

// `extends` ensures object created from `Greetr` has all properties and methods
// of `EventEmitter`

// `export` class using a "class expression"
module.exports = class Greetr extends EventEmitter {
	constructor() {
		super(); // make sure it extends from EventEmitter
		this.greeting = 'Hello world!';
	}

	greet(data) {
		console.log(`${ this.greeting }: ${ data }`);
		this.emit('greet', data);
	}
}
