var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 
        '@ds159220.mlab.com:59220/nodetodosample';
    }
    
}