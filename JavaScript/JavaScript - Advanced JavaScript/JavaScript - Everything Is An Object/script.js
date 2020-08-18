// Lecture: Everything Is An Object


/* In JS everything is an object except primitives.

Primitives - String, Number, Boolean, Undefined and Null
Objects - Array, Function, Object, Date ...
*/


// 1) Array as an object in JS
var arr = [1, 2, 3];
arr[3] = 4;

// Adding property to an array object
arr.prop = 'Hello';

console.log(arr);
// Accessing array property with . operator
console.log(arr.prop);

// -----------------------------------------

// 2) Function as a object in JS

 function a() {
   console.log('Hello');
 }

// Adding property to function object
 a['prop'] = 'Hi';

// Adding object to function object
 a.obj = {
   greet: 'Hey'
 };

// Adding function to function object
 a.myFunc = function() {
   console.log('Hola');
 }

 console.log(window);



















