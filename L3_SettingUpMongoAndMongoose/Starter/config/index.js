// get config.json file (located in same directory)
// you don't have to use .js or .json, it will look for it anyways
var configValues = require('./config');

module.exports = {

    // could easily pass a parameter to this function to tell it
    // if you want development or production
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 
        '@ds159220.mlab.com:59220/nodetodosample';
    }

}