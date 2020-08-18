// Lecture: Objects VS Primitives


// For primitives a and b two separate memory blocks are created 
var a = 10;
var b = a;
a = 20; // When a is changed, b is not changed

console.log(a);
console.log(b);

console.log(window);


// For Objects c and d, only one memory block is created. 
// d refers to memory block of c
var c = {
  name: 'John'
};

var d = c;

console.log(window); // One Object,two references c and d

c.name = 'Nick'; // when c.name changes, d.name too change

console.log(window);

// Now c refers to complete new object. d is not changed here
c = {
  name: 'Bob'
}; 

console.log(window);








