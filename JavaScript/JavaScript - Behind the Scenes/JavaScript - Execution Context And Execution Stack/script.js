// Lecture: Execution Context And Execution Stack

// Global Execution context is ready
console.log(window); // Check out window object even before start of JS execution

var aa = 'Jose';
console.log(aa);

// Execution context of a()
function a() {
  var name = 'John';
  b();
  console.log(name);
}

// Execution context of b()
function b() {
  var name = 'Bob';
  c();
  console.log(name);
}


// Execution context of c()
function c() {
  var name = 'Nick';
  console.log(name);
}

a();

// Global Execution context continues 
var aaa = 'Pearl';
console.log(aaa);


// For above scenario Execution stack can be picturized as below

/*

Execution context for function c (when c is called) - name = 'Nick'
       |
Execution context for function b (when b is called) - name = 'Bob'
       |
Execution context for function a (when a is called) - name = 'John'
       |
Global Execution context (window object has 'aa' and 'aaa' as properties and 'a', 'b' and 'c' as methods)

*/

// JS engine has size limit for it's execution stack

// RangeError - Maximum call stack size exceeded
/*function a() {
  a();
}

a();*/












