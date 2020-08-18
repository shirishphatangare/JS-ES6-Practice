// Lecture: Get And Manipulate On Individual Elements - Part 1

//document is an object which is the highest node in DOM structure for a HTML document. All other nodes in a DOM are objects too.

// document object is a property of global window object

console.log(document);
console.log(window.document);
console.log(typeof document);


console.log(document.getElementById('list'));

// getElementById() is a method of document object
var el = document.getElementById('list');
console.log(el);
console.log(typeof el);

// var el = document.getElementById('LIST');
// id 'LIST' do not exist, hence we get null for el.
// console.log(el); 

// textContent is property of el object 

/*
    The textContent property sets or returns the texual content of the specified node, and all its decendants. Using textContent property, any child nodes are removed and replaced by the single textnode assignement. 
*/
console.log(el.textContent);
console.log(el.textContent = 'Hello');

var heading = document.getElementById('heading').textContent;
console.log(heading);

var ulElement = document.getElementById('list');
console.log(ulElement.textContent = heading);

// innerHTML is property of el object 

/*
   The innerHTML property sets or returns the whole HTML content including tags, attributes and text nodes as a string.  
*/
console.log(el.innerHTML);
console.log(el.innerHTML = 'Hello');

// Note the difference between innerHTML and textContent assignments in below 2 statements
console.log(el.innerHTML = '<h1>Hello</h1>');
console.log(el.textContent = '<h1>Hello</h1>');


/* Generally 'id' is unique for a HTML document. However, if there are multiple elements with same id then getElementById() method returns first element with that id. */  


/* Document Object Model (DOM) - 
1) DOM is a cross-platform and language-independent model for representing and interacting with elements in HTML document.
2) DOM is neither part of HTML or JS. 
3) DOM is represented as a tree of HTML elements. It uses terms like parent, child and siblings for HTML nodes/elements.
4) 3 types of nodes - Element nodes, Text nodes and Attribute nodes.
*/










