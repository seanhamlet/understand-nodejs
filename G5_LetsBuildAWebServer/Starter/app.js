// get core http module
var http = require('http');

// function is event listener (callback function)
http.createServer(function(req, res) {

    // http response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // end method means "I'm done sending and this is the last thing
    // that I'm sending"
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1'); // listen at localhost (127.0.0.1)