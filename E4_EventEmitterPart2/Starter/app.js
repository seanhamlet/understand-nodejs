var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

// use eventConfig.GREET instead of repeating 'greet' string
emtr.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
  console.log('A greeting occured!');
});

// fake a greeting
console.log('Hello!');
// manually emit the event
emtr.emit(eventConfig.GREET);
