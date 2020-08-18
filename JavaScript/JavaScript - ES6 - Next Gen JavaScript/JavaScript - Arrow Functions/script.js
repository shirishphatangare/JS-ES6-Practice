// Arrow Functions 

 //Normal function expression
// const multiply = function(x, y) {
//     let z = x * y;
//     return z;
// }
//
// console.log(multiply(5, 6));

 //Arrow function 2 parameters
 const multiply1 = (x, y) => x * y;
 console.log(multiply1(5, 6));

 //Arrow function no parameter
 const multiply2 = () => 5 * 10;
 console.log(multiply2());

 //Arrow function returning an object - Notice extra parenthesis 
 const multiply3 = () => ({firstname: 'John'});
 console.log(multiply3());


// ----------------------------------

// When using Array Helpers, it is more convenient to use Arrow functions 

 const numbers = [2, 4, 6, 8];
 let double = numbers.map(number => number * 2);
 console.log(double);

// ---------------------------

// var personES5 = {
//     firstname: 'Nick',
//     lastname: 'Doe',
//     sayFullName: function() {
//
//         var that = this;
//
//         // Below function is not bound to any object so 'this' keyword inside below function points to Global window object.
//         // Trick is to use 'that' variable - ES5
//         return function() {
//             console.log(that);
//             console.log(that.firstname + ' ' + that.lastname);
//         }
//     }
// }

// personES5.sayFullName()();

// -----------------------------

// Another trick is to use bind() method - ES5

// var personES5 = {
//     firstname: 'Nick',
//     lastname: 'Doe',
//     sayFullName: function() {
//         return function() {
//             console.log(this);
//             console.log(this.firstname + ' ' + this.lastname);
//         }.bind(this);
//     }
// }

// personES5.sayFullName()();


// Lexical 'this' in Arrow functions - ES6

var personES6 = {
    firstname: 'Nick',
    lastname: 'Doe',
    sayFullName() { // Notice function keyword not required on this line in ES6

        return () => {
            // 'this' inside an arrow function has surrounding scope i.e. scope of sayFullName block
            console.log(this); // this points to personES6 object
            // Access property of an object using below notation `${}` - ES6 Template String feature
            console.log(`${this.firstname} ${this.lastname}`);
        }
    }
}

personES6.sayFullName()();

// -----------------------------

document.querySelector('h1').addEventListener('click', function() {
    console.log(this);
    let a = () => {
        this.style.color = 'red'; // 'this' points clicked header element due to use of an arrow function 
    }

    a();

});
























































