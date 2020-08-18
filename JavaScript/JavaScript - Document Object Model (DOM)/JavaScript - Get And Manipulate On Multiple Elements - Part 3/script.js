// Lecture: Get And Manipulate On Multiple Elements - Part 3


/* querySelectorAll() returns all the elements in the document that matches the specified CSS selector 

/* You can select multiple elements with multiple selectors separated by commas */

/* It returns NodeList object as opposed to HTMLCollection for previous methods - getElementsByClassName and getElementsByTagName */

var lis = document.querySelectorAll('li, h2, #hide-list');
console.log(lis);

// lis.push('Hello'); // push do not work for NodeList

// lis.forEach(function(li) {
//     console.log(li);
// });

// forEach works for NodeList directly but it is good practice to use 
// Array.from
Array.from(lis).forEach(function(li) {
    li.textContent = "Hello World";
});


/* In summary

Get And Manipulate On single/first Element in a document - getElementById(), querySelector()
Get And Manipulate On Multiple Elements in a document - getElementsByClassName(),getElementsByTagName() and querySelectorAll()

*/

