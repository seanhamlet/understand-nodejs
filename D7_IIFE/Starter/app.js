var firstname = 'Jane';

// first set of parentheses around function make it a function expression instead
// of a function statements
(function (lastname) {
  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
}('Doe'));
// the reason firstname is not affected by 'john' is because the variables
// are protected inside the function

console.log(firstname);
