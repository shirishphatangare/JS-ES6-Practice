// Lecture: JavaScript Behind The Scenes - Introduction


var a = 'Hello';
console.log(a);


// Syntax parser of JS engine throws SyntaxError for below statement due to missing () for function b
/*function b {

}*/

// Lexical scope is an environment, where a piece of the entire code physically sits. For example variables inside function can not be accessed outside.


function c() {
    var aa = "Hello";
}

console.log(aa);


// Execution context is a container, which manages the code that is currently running. It most cases it is created by a function 

