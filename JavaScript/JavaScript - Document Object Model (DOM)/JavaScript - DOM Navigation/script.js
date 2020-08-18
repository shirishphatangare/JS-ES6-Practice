// Lecture: DOM Navigation


var listItem = document.getElementById('list-item');

// Parent Elements
console.log(listItem.parentNode);
console.log(listItem.parentNode.parentNode);
console.log(listItem.parentElement); // parentElement and parentNode gives same result
console.log(listItem.parentElement.style.background = 'orange');

// Child Elements
console.log(listItem.childNodes); // text nodes are due to whitespace in HTML file between child elements.
console.log(listItem.children); // no text nodes in output
console.log(listItem.firstChild); // Gives text node
console.log(listItem.firstElementChild); // Ignores text node
console.log(listItem.lastChild);  // Gives text node
console.log(listItem.lastElementChild); // Ignores text node

// Siblings
console.log(listItem.previousSibling); // Gives text node
console.log(listItem.previousElementSibling); // Ignores text node
console.log(listItem.nextElementSibling); // Ignores text node



















