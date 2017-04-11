// set up angular app
// similar to module.exports as in it won't interfere with other code
// empty array would be list of other modules that this module depends on (similar to 'require')
angular.module('TestApp', []);

// JavaScript ignores white space, so below really is 'angular.module('TestApp').controller()'
angular.module('TestApp')
    .controller('MainController', ctrlFunc);

// angular will attach message and people to HTML object body
// then can access inside html
function ctrlFunc() {
    this.message = 'Hello';

    this.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jim Doe'
        }
    ];
}