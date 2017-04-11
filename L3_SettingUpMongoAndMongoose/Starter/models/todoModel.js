// setup our schema
var mongoose = require('mongoose');

// get schema object to create schema
var Schema = mongoose.Schema;

// create new todo schema
var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

// create new model
var Todos = mongoose.model('Todos', todoSchema);

// export resuable model
module.exports = Todos;