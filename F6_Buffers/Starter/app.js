// Buffer's are globally available so don't need to 'require' it
// take string 'Hello' and convert it binary using 'utf-8' encoding
var buf = new Buffer('Hello', 'utf-8');

// buffer contains binary data,
// but buffer data can be converted to other formats
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

// buffer behaves like an array
console.log(buf[2]);

// can write data to buffer
buf.write('wo');
// 'wo' will overwrite 'He'
// this is because buffer is designed to hold finite memory
// when buf was initialized with "hello" it was initialized to be 5 chars
// in length
console.log(buf.toString());

// usually you don't mess with the buffer directly
// usually it comes back from some other utility or object