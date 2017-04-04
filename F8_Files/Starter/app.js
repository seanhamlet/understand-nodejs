// deals with file system
// fs found int core V8 (lower level C++ code)
var fs = require('fs');

// __dirname is path to directory of the current code that is running
// sync means synchronous approach to reading file
//  therefore, it will wait until greet string is full before V8 engine moves on
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// asynchronous approach
// if encoding parameter is included ('utf8'), then it will convert returned buffer data into string
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
// error first callback
function(err, data) {
    console.log(data);
});

// this happens before asynchronous approach
console.log('Done!')