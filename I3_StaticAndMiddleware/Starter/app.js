var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// use middleware to make sure that css file can be downloaded when requested
// route: /assets, does not have to be same name as folder file is in (e.g. public)
app.use('/assets', express.static(__dirname + '/public'));

// if you leave off the route for app.use
//	the middleware will run for every request
app.use('/', function(req, res, next) {
	console.log('Request Url: ' + req.url);
	next(); // this means to run the next middleware
	// call the next middleware that is connected to this particular route ('/')
});

app.get('/', function(req, res) {
	res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.param.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);