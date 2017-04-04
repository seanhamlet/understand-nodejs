// array buffer needs size in bytes
// ArrayBuffer is from V8 JavaScript engine
// unlike buffer, that comes from nodejs
var buffer = new ArrayBuffer(8); // 64 0's and 1's
// typed array: a way for you to deal with binary data in buffer
// if you change the array below, you actually change the buffer
// when you read from array, you read buffer
var view = new Int32Array(buffer); // 32 bits for one number, so this will hold 2 numbers with 64 0s and 1s
view[0] = 5;
view[1] = 15;
console.log(view);