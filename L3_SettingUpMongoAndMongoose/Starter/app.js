var express = require('express');
var app = express();
var mongoose = require('mongoose');
// require config folder, which will run index.js file to get db connection string
var config = require('./config');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// connect to database
mongoose.connect(config.getDbConnectionString());

// you don't disconnect, mongoDB by default is a single connection that stays open

app.listen(port);