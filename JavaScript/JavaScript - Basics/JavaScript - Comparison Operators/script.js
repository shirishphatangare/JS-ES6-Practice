// Lecture - Comparison Operators


var a = 5;
var b = 5;
console.log(a == b);

var a = 5;
var b = '5';
console.log(a == b); // '==' compares only values noy types
console.log(a === b); // '===' compares values and types

// It is recommended to use '===' operator for comparison because it is safer than '==' operator

var a = 5;
var b = 5;
console.log(a != b);

var a = 5;
var b = '5';
console.log(a != b); // only values
console.log(a !== b); // value and type comparison
