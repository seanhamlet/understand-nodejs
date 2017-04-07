var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

// set the view engine to use ejs templating engine with file extension .ejs
// by default, will look for static 'views' inside folder called 'views'
// 'views' just means user interface or UI
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	// tell which view to use
	// since we setup file extension in view engine don't have to write it here
	// 	this is good because if you ever switch view engines you don't have to change
	//  extension here
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);