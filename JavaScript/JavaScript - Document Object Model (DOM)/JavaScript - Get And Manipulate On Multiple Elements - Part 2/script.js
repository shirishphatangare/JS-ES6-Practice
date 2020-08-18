// Lecture: Get And Manipulate On Multiple Elements - Part 2

/* forEach(function arg) method executes a provided function once for each array element. */

var icons = document.getElementsByClassName('fa');

Array.from(icons).forEach(function(icon, index, arr) {
     console.log(icon, index, arr);
});


// getElementsByTagName returns an HTMLCollection for all the elements in the document with specified tag name
var lis = document.getElementsByTagName('li');
console.log(lis);










