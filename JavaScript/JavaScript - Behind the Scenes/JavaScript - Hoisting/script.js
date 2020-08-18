// Lecture: Hoisting


console.log(a); // undefined 
console.log(b); // prints function object - Note function statement behaves different than variables
console.log(b()); // Function is executed
console.log(bb);  // undefined - Note function expression behaves different than function statement but same as variables
//console.log(bb()); // TypeError: bb is not a function

var a = 10;

function b() {
  return 20;
}

var bb = function() {
  return 200;
}

console.log(a); // prints 10 during execution stage
console.log(b()); // No difference for function statement. Behaves same during creation and execution stages
console.log(bb()) // Function exression is executed here without any error

//------------------------------

if(true) {
  var aaa = 10;
} else {
  var bbb = 20;
} 

console.log(aaa);
console.log(bbb); // During creation stage 'bbb' is assigned to undefined but during execution stage it is not executed 

// Reverse behavior 

if(false) {
  var aaaa = 10;
} else {
  var bbbb = 20;
} 

console.log(aaaa);
console.log(bbbb);


//------------------------------
// Just to see how function expression is printed

var bbbbb = function() {
   return 2000;
}

console.log(bbbbb);

//------------------------------

/* Hoisting Concept

Global Execution context has two stages --

1) Creation stage - To setup a memory space for variables and functions is called as Hoisting. In Creation stage all variables are set to undefined.

2) Execution stage - Actual variable assignment and code execution

*/





