// Lecture: DOM Styles And Classes

// .changeFt and .changeBg are 2 entries in style.css to dynamically assign className to an element.

var h2 = document.querySelector('header h2');

h2.className = 'changeBg';
// h2.className = 'changeFt'; // Replace Class
// h2.className += ' changeFt'; // Append Class

// console.log(h2.className);
// console.log(typeof h2.className);

/* classList is a read-only property which returns class-names of an element, as a DomTokenList object
Useful to add,remove and toggle CSS classes on an element. */

h2.classList.add('changeFt');
h2.classList.remove('changeBg');
h2.classList.toggle('changeBg');

console.log(h2.classList);











