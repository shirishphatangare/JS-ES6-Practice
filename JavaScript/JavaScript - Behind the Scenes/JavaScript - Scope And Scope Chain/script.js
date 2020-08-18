// Lecture: Scope And Scope Chain


console.log(window); // num1 and num22 belong to window object
var num1 = 5; // Global scoped 
//console.log(num2 + num1); // can not access num2 or num3 here
// console.log(num1);
//console.log(num22); // ReferenceError
console.log(this.num22); // undefined
console.log(window.num22); // undefined

function a() {
  var num2 = 100; // Local scoped for fun a
  num22 = 10; 
  // num1 = 10; // num1 can be accessed but not num3
  // console.log(num3 + num2 + num1);
  // console.log(num1);

  function b() {
    var num3 = 15; // Local scoped for fun b
    // var num1 = 15;
    console.log(num3 + num2 + num1); // All num1, num2 and num3 can be accessed - Scope chain concept
    // console.log(num1);
  }

  b();
}

a();

console.log(num1); // only num1 can be accessed
console.log(num22); // num22 can be accessed here without error

/* If you use var the variable is declared within the scope you are in (e.g. of the function). If you don't use var, the variable bubbles up through the layers of scope until it encounters a variable by the given name or the global object (window).

This is, one of the most dangerous issues with javascript, and should be deprecated, or at least raise warnings over warnings. The reason is, it's easy to forget var and have by accident a common variable name bound to the global object. This produces weird and difficult to debug behavior. */










