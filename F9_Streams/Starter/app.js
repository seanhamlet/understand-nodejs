var fs = require('fs');

// to get string instead of buffer, specify encoding
// highWaterMark is number of bytes we want our buffer size to be (each chunk)
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk.length);
	writable.write(chunk);
});