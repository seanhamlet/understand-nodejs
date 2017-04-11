var express = require('express');
var app = express();

// use environment variable if running on production server,
// else default to 3000 (locally)
var port = process.eng.PORT || 3000;

// setup frontend connection for static files
// to be delivered straight to the browser
app.use('/assets', express.static(__dirname + './public'));

// setup templating for the server-side
app.set('view engine', 'ejs')
// angular JS can be used for client-side templating

app.listen(port);