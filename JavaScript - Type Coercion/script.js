// Lecture - Type Coercion

// Type Coercion means that a value from one type can be converted to another at run-time. We should be aware of type coercion rules to avaoid unexpcted results.

var a = 10 + 5; // '+' is addition operator
console.log(a);

var a = 10 + '5'; // Here '+' is treated as concatenation operator and not addition operator. Number 10 is converted to String and concatenated with '5'
console.log(a);

var b = 'Hello ' + ' dear ' + 'student';
console.log(b);

var a = 10 * '5'; // '*' is multiplication 
console.log(a);

var a = 5 + 10 + 'b'; // First '+' addition and second '+' concatenation
console.log(a);

var c = 'b' + 5 + 10; // Both '+' concatenation
console.log(c);

console.log(5 === 5);
console.log(5 === 5 === 5);
console.log(true == 5);
console.log(true === 5);
console.log(true == 1); // true is Coerced to 1 
console.log(false == 0); // false is Coerced to 0
console.log(true === 1); // false - Coercion do not happen here
console.log(false === 0); // false - Coercion do not happen here










