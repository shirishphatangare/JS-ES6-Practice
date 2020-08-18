// Lecture: Prototype - Object Function

/* 

1) When it comes to Prototypes, JS is different compared to other languages.

2) Prototype Inheritance -- 
Every object inherits properties and methods from its prototype.

3) Prototype itself is an object.

4) In other words, In JS, every object is linked to other object which is called as a protoytpe.

*/


var a = {};
var b = new Object();

console.log(a);
console.log(b);
console.log(Object); // Global Object Function - Object
console.log(Object.prototype); // Global Object Function - Object has a prototype property. This prototype property is inherited by every object in JS. Remember in JS everything is an object. So even an array will have prototype in it.


Object.prototype.greet = 'Hello';
console.log(Object.prototype);

var arr = [3,4,5]
console.log(arr)// arr has prototype with added greet property. 
// Check __proto__ : Object property for greet property which is parent of __proto__ : Array 


// __proto__ is an object property which allows to access Prototype object of an  Global Object Function


// Every Object created using Global Object Function constructor gets an access to it's prototype object.










