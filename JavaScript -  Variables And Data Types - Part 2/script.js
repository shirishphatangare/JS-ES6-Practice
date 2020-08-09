// Lecture - Variables And Data Types - Part 2

/* In JS everything is an object except primitives (String, number, boolean, undefined, null) */

// Strings
var str = "John is an 'Instructor'";
console.log(str);

str = 'John is an "Instructor"';
console.log(str);

// Numbers
var num = 27.23;
console.log(num);

// Booleans
var num1 = 5;
var num2 = 10;
console.log(num1 < num2);
console.log(num1 > num2);

// Undefined
var a;
console.log(a); // 'a' is declared. Memory is assigned for 'a' but it is not initialized. Hence JS engine initializes 'a' as 'undefined' by default

// Null
var a = null;
console.log(a);
//console.log(b); // 'b' is not declared. Memory is not assigned for 'b' hence referenceError

var a = undefined; // We can explicitly assign 'undefined' to a variable but generally not done. Instead 'null' is assigned in such cases.
console.log(a);





