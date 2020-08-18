// Lecture: Rest Parameter


// ES6 Rest Parameter feature is like var args feature in Java


// arguments special array in ES5

// const a = function(x, y) {
//     console.log(Array.prototype.slice.call(arguments));
//     console.log(x + y + arguments[2] + arguments[3]);
// }

// a(10, 20, 30, 40);

// -----------------------------------

// arguments special array do not work with Arrow function

// const a = (x, y) => {
//     console.log(Array.prototype.slice.call(arguments));
//     console.log(x + y + arguments[2] + arguments[3]);
// }

// a(10, 20, 30, 40);

// -----------------------------------

//ES6 - Rest Parameter - Example 1

 const a = (x, y, ...rest) => {
     console.log(rest);
     console.log(x + y + rest[0] + rest[1]);
 }

 a(10, 20, 30, 40);

// -----------------------------------

//ES6 - Rest Parameter - Example 2

// Rest parameter should be the last in parameters list 
const family = (lastname, ...names) => {

    names.forEach(name => {

        console.log(`${name} ${lastname}`);

    });

};

console.log(family)

family('Smith', 'Nick', 'Jane', 'Bob', 'Jessica');

























































































