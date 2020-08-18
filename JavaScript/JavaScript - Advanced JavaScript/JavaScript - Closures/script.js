// Lecture: Closures


/* Function has always access to the variables of its outer function even after the execution context of the outer function is finished */

// Closure- Example 1
 function calc(num1) {
   var num2 = 10;

   return function(num3) {
     var sum = num1 + num2 + num3;
     console.log(sum);
   }
 }

 var add = calc(5);

 // console.log(add);
 
 // How can retuned function still has access to num1 and num2? It is possible in JS due to power of Closures.
 add(15);

// -------------

// Closure- Example 2

 function a() {
   var arr = [];
   for(var i = 0; i < 3; i++) {
     arr.push(function() {
       console.log(i);
     });
   }
   return arr;
 }

 var b = a();

 console.log(b);

 /*Prints value of i as 3 for all 3 calls.
 These functions has access to i (Thanks to closure!) but when each call happens value is already 3 */

 b[0]();
 b[1]();
 b[2]();


// -------------
// IIFE comes to rescue!

//function a() {
//  var arr = [];
//  for(var i = 0; i < 3; i++) {
//    // IIEF
//    arr.push((function() {
//      console.log(i);
//    })());
//  }
//  return arr;
//}
//
//a();
//




















