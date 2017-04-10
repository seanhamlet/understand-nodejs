var express = require('express');
var app = express();
var mongoose = require('mongoose');

// mongodb://<dbuser>:<dbpassword>@ds155820.mlab.com:55820/addressbook
// where dbuser is 'test' and dbpassword is 'test'
mongoose.connect('mongodb://test:test@ds155820.mlab.com:55820/addressbook');

// mongoose provides constructor called Schema
// lets you define the structure of a document
var Schema = mongoose.Schema;

// names of properties and types of data it will store
var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

// basically a function constructor for the Schema
var Person = mongoose.model('Person', personSchema);

// new instance of Person object (an individual document)
// because 'Person' is a model (an object), it will be returned with methods on it (e.g. save)
var john = Person({
	firstname: 'John',
	lastname: 'Doe',
	address: '555 Main St.'
});

// save the user in mongodb database with particular schema
john.save(function(err) {
	if (err) throw err;

	console.log('person saved!');
});

var jane = Person({
	firstname: 'Jane',
	lastname: 'Doe',
	address: '555 Main St.'
});

jane.save(function(err) {
	if (err) throw err;

	console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	// get all the users
	// query database for all users
	// empty {} means ask for everything
	Person.find({}, function(err, users){
		if (err) throw err;

		// object of all users
		console.log(users);
	});

	next();
});

htmlController(app);

apiController(app);

app.listen(port);