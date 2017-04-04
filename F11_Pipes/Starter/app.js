var fs = require('fs');
var zlib = require('zlib');

// readable stream
var readable = fs.createReadStream(__dirname + '/greet.txt');

//writable stream
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// creates transform stream (readable and writable)
// every time chunk is sent to it, it compresses that chunk
// transforms data into compressed version
var gzip = zlib.createGzip();

// readable is source and writable is destination
// pipe sets up event listener to listen for chunk of data
readable.pipe(writable);

// can keep using .pipe if destination returned is readable and writable (e.g. duplex or transform stream)

// can stream file that anything that is a stream (e.g. file or internet connection)

// read from readable, compress with gzip, and write to compressed file
readable.pipe(gzip).pipe(compressed);