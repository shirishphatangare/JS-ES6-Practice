// Lecture: Arrays - Part 1

// An array literal - Better due to readability, Simplicity and execution speed
 var arr = [
     'John', 
     'Bob', 
     'Mary', 
     10, 
     true, 
     [1, 2, 3],
     function(name) { // An anonymous function as an array element

         return 'Hello ' + name;

     }
 ];

 console.log(arr);
 console.log(arr[0]);
 console.log(arr[1]);
 console.log(arr[5][1]);
console.log(arr[6]);
 console.log(arr[6](arr[0])); // Call function and pass arg as an array element

// ---------------------------------------


// Array constructor 
var arr1 = new Array(1, 'John', false);
console.log(arr1);























