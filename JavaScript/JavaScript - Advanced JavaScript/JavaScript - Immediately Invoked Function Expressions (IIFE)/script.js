// Lecture: Immediately Invoked Function Expressions (IIFE)

// IIFE is a function that runs as soon as it is defined.
// IIFE is used to avoid naming conflicts of variable names

 function a() {
   var c = 'From function a';
   return c;
 }

 var b = function() {
   var c = 'From function b';
   return c;
 }

 var c = 10;
 var c = 20; // Notice no variable redeclaration error in JS

 console.log(c);
 console.log(a());
 console.log(b());

// -------------------------------

// 5 + 10;

// IIFE Example 1 - Notice no function name here. Normally we get error.
(function(name) {
  console.log('Hello ' + name);
})('John');


// IIFE Example 2
var a = function() {
  console.log('Hi');
  return 'Hello';
}();

// a(); // Error a is not a function
console.log(a);






