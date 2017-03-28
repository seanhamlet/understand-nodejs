function Emitter() {
  this.events = {};
}

// adding event listener
// 'on' is typically used because it makes sense and reads nicely
// e.g. 'on' file open, 'on' message being received from internet
Emitter.prototype.on = function(type, listener) {
  // if property exists, then great, otherwise make property new array
  this.events[type] = this.events[type] || [];
  // add functions (listeners) to array
  this.events[type].push(listener);
};

// event emitter
// e.g. 'on' file save, invoke all listeners of listener array of event type
Emitter.prototype.emit = function(type) {
  // if event a property
  if (this.events[type]) {
    // loop through listeners and invoke listener functions
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
};

module.exports = Emitter;
