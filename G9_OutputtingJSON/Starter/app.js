var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    // use JSON.stringify to convert obj to string formatted as JSON (i.e. serialize it)
    res.end(JSON.stringify(obj));
    
}).listen(1337, '127.0.0.1');