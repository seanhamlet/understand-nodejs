// this runs on server
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [
		{
			name: 'John Doe'
		},
		{
			name: 'Jane Doe'
		},
		{
			name: 'Jim Doe'
		}
];

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// this passes variable serverPeople to index.ejs file
	res.render('index', { serverPeople: people });
	
});

app.listen(port);