// Lecture: Functions - Part 2

// Function statement - A statement do not produce a value

//add(5, 10); // Function call before function definition - Works in case of a Function statement - Hoisting Concept

function add(a, b) {

    console.log(a + b);

}

add(5, 10);



//sum(10, 15); // TypeError for Function call before function definition


// Function expression - An expression produces a value
// Below function is an anonymous function
var sum = function(a, b) {

    console.log(a + b);

}

sum(10, 15);



























