// Lecture: DOM Styles


// var h2 = document.querySelector('header h2');
// console.log(h2);
// console.log(h2.style.color = 'red');

// If style property contains 2 words like 'background-color'
// camel-case is used in JS like - backgroundColor

// console.log(h2.style.background-color = 'green');

/* With style property, we add to previous style elements. We do not replace them. For e.g. with below statement 
color = 'red' is retained and background-color = 'green' is added */  
// console.log(h2.style.backgroundColor = 'green');

var lis = document.querySelectorAll('ul li');
// console.log(lis[1].style.backgroundColor = 'red');
// lis is of NodeList type - Traversing through NodeList
for(var i = 0; i < lis.length; i++) {
    console.log(lis[i].style.backgroundColor = 'blue');
}


// Unlike other style properties, 'cssText' property replaces
// previous inline style with given text.
console.log(lis[0].style.cssText = 'background-color: yellow; font-size: 25px;');


// For multiple lines in Chrome JS console - Shift + Enter