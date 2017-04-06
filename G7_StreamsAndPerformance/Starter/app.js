var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // create readable stream and pipe it to writable response stream
    // every chunk of data read from the file will be buffered and then
    //  piped out to the http response stream
    // rather than pulling the entire file into the buffer and then sending it
    //  we will send it a chunk at a times
    // therefore, our buffer stays small and our application will be faster,
    //  more responsive, and more performant
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    
}).listen(1337, '127.0.0.1');