// Lecture: Global Execution Context And Global Object



// Global execution context - It is a base execution context, that manages the code which is not inside a function.

// Global execution context is created immediately when the page is loaded. It is created even before JS code is linked to HTML. We can see Window object in console even without linking js code to HTML.

// Global execution context creates - 
// a) Global Object OR Window Object OR this Object

console.log(window);
console.log(this);

var aa = 'Jose'; - //When a variable is created outside function, it is assigned to window (global) object as a property.

console.log(aa);
console.log(window.aa);
console.log(this.aa);


// Similarly, a function is assigned to the global window object as a method.
function aaa() {
    console.log("Hello!");
}

console.log(aaa);
console.log(window.aaa);
console.log(this.aaa);

aaa();
window.aaa();
this.aaa();



function a() {
  return 'Hello';
}

console.log(window);

a();

console.log(window.a());

var obj = {
  name: 'Nick',
  b: function() {
    return 'Hi'
  }
};

console.log(obj.name);
console.log(obj.b());
