// get todoModel
var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res){

        // seed database

        // create array of todos
        // there are utilities out there to create fake JSON data for you
        // json-generator.com
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];

        // output results back to the browser
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });

}