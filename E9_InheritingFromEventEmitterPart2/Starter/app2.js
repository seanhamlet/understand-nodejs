var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	// without this line of code, the `this.firstname` and `this.lastname` is never
	// run, and therefore, when calling the greet method, you will get 'Hello undefined undefined'
	// this is because `util.inherits` only connects objects together with a prototype
	// but what we want is for the properties and methods of Person to actually be
	// directly attached to the Policeman, this is what the .call does
	// .call calls the Person function constructor but replaces the person constructor object
	// with a new object `this`, the `this` from the Policeman function constructor

	// in summary,
	// without Person.call(this), the function constructor of Person is not called
	// with util.inherits, so firstname and lastname will never get set

	// with .call, I make sure the object has everything, not just what is down
	// the prototype chain, but directly on the object
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
