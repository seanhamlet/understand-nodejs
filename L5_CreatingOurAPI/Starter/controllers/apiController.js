var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    // use bodyParser middleware to parse out JSON from http request body
    app.use(bodyParser.json());
    // allow handling of urlencoded data
    app.use(bodyParser.urlencoded({ extended: true }));

    // search for all todos for a particular username
    app.get('/api/todos/:uname', function(req, res) {
        
        Todos.find({ username: req.params.uname }, function(err, todos){
            if (err) throw err;

            res.send(todos);
        });

    });

    // return individual todo
    app.get('/api/todo/:id', function(req, res) {

        Todos.findById({ _id: req.params.id }, function(err, todo){
            if (err) throw err;

            res.send(todo);
        });
    });

    // add a todo (notice POST instead of GET)
    app.post('/api/todo', function(req, res) {

        // in order to update a todo, check if sent JSON data has id name in object
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, { 
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo) {
                if (err) throw err;

                res.send('Success');
            })
        }
        // new todo (add it)
        else {
            // create new todo using model
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            // add todo to database
            newTodo.save(function(err) {
                if (err) throw err;
                res.send('Success');
            });
        }
    });

    app.delete('/api/todo', function(req, res) {

        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
    });

};