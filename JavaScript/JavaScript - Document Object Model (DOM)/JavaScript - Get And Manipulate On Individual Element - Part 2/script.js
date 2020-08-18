// Lecture: Get And Manipulate On Individual Elements - Part 2


/* querySelector returns the first element that matches a specified CSS selector in the document. Returns null if an element is not found. String argument to querySelector must follow css syntax. */

var el = document.querySelector('ul'); // ul tag
console.log(el);
//console.log(el.textContent = 'Hello World');

var el = document.querySelector('#search-note'); // id="search-note"
console.log(el);

var el = document.querySelector('ul li'); // First child li tag of ul tag
console.log(el);

var el = document.querySelector('ul li:nth-child(2)'); // Second child li tag of ul tag
console.log(el);

console.log(el.querySelector('p .fa-times')); // p tag of second li tag. Get child element of p tag with class=fa-times


/* querySelector can be called on other object like el object above. This is not the case with getElementById() method. 
getElementById() method always should be called on document object. */





