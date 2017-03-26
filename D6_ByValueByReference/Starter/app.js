// pass by value
function change(b) {
  b = 2;
}

var a = 1;
change(a); // b becomes copy of a, therefore, a is not changed
console.log(a); // a still equals 1

// pass by reference
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c); // since d points to same memory location as c, c is changed
console.log(c); // { prop1: [Function], prop2: {} }
