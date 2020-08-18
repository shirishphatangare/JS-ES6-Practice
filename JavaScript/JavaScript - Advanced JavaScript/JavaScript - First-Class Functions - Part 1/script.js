// Lecture: First-Class Functions

// Functions can be used in a flexible way in JS

// 1) In a function expression, a function can be assigned to a variable and also a function can be invoked using a variable. Functions in JS are First-Class Functions.

var a = function() {
    console.log("Hello");
}

a();

// 2) Function as a parameter to the function

// Example 1
 
function sum(num1, num2, fn) {
   console.log(num1 + num2);
   console.log(fn());
 }

 function done() {
   return 'Function is executed'
 }


 sum(5, 10, done);
 sum(5, 10, function() {
   return 'Function is executed'
 });


// Example 2

var scores = [55, 35, 87, 45];

function checkResult(arr, fn) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function passOrFail(score) {
  return score >= 51;
}

function calcDifference(score) {
  return score - 51;
}

console.log(checkResult(scores, passOrFail));
console.log(checkResult(scores, calcDifference));















