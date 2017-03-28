var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
  console.log('A greeting occured!');
});

// fake a greeting
console.log('Hello!');
// manually emit the event
emtr.emit('greet');
