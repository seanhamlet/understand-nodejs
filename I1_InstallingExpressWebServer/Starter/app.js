// returns a function
var express = require('express');
// also returns a function, but has properties and methods on it
// functions are objects in JavaScript
var app = express();

// this var port will be equal to environment variable PORT or if PORT DNE, then 3000
// this is useful because local box will use 3000
//  but environment on server could have PORT which can be used to set up port number
var port = process.env.PORT || 3000;

// http request with get method and url '/'
// if used 'post' instead, could still use same URL '/', but response could be different
//  because it was a 'post' instead of a 'get'
app.get('/', function(req, res) {
    // don't need content-type because res method takes care of it, the best it can
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(3000);