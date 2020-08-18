// Lecture: let / const Variable Declarations

// It is recommended to use let/const instead of var

// Differences between var and let/const
// Difference - 1

// ES5 way of variable declaration - var keyword
 var name = 'John';
 var age = 28;
 name = 'Nick';
 age = 29;
 console.log(name, age);


// ES6 way of variable declaration - let and const

// A constant declaration in ES6
 const name1 = 'John';

// A variable declararion in ES6
 let age1 = 28;

 //name1 = 'Nick'; // Error! const can not change
 age = 29; // OK
 
console.log(name, age);

// -----------------------------

// Difference - 2

// ES5 - Redeclaration allowed with var
// var person = 'John Smith';
// var person = 'Nick Doe';


// ES6 - Redeclaration NOT allowed with let
// let person = 'John Smith';
// let person = 'Nick Doe'; // ERROR!
// console.log(person);

// -----------------------------

// Difference - 3

//console.log(b1) // undefined due to hoisting
//var b1 = 'Hello';
//
//console.log(b2) // ERROR! no hoisting with let/const
//let b2 = 'Hello';

// -----------------------------

// Difference - 4

////ES5 - Global variable c1 is part of global window object
//var c1 = 'Hello';
//
////ES6 - Global variables c2/c3 is NOT part of global window object with let/const
//let c2 = 'Hello';
//const c3 = 'Hello';

// -----------------------------

// Difference - 5

// ES5 - Local variables are function scoped but not block scoped
// function a() {
//     var b = 'Hello';
//     // const b = 'Hello';
//     // let b = 'Hello';
// }

// console.log(b); // ES5 and ES6 both ERROR!

// ES6 - Local variables are block scoped (also function scoped)

// let firstname = 'Nick';

// if(true) {
       // ES6 - Block scoped
//     let firstname = 'John';
//     console.log(firstname);
       // ES5 - NO block scope
//     var firstname1 = 'John';
// }

// console.log(firstname); // ERROR ! ES6
// console.log(firstname1); // OK ES5

// -----------------------------

// Difference - 6

// const person = {
//     name: 'Jane',
//     age: 18
// };

// person.age = 19;
// console.log(person); // For const object person, we can change property


// -----------------------------

// for(let i = 0; i < 5; i++) {

//     setTimeout(function () {
//     console.log(i); // A new variable 'i' is created on each loop for 'let'
//     }, i * 500);

//     console.log(i);

// }

// console.log(i);

























