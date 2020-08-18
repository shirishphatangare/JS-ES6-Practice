// Lecture: Events - Part 2

// JAVASCRIPT EVENTS REFERENCE - https://developer.mozilla.org/en-US/docs/Web/Events

//---------------------

/* addEventListener() method attaches an event handler to the specified element. Previous events are NOT replaced.
You can use multiple similar events to one element at a time
*/

var h2 = document.querySelector('header h2');

// h2.addEventListener('click', function() {
//   console.log('Clicked');
// });

// h2.addEventListener('click', a);
// h2.addEventListener('click', b);

// function a() {
//   console.log('Clicked a');
// }

// function b() {
//   console.log('Clicked b');
// }


// Event Object - When an event occurs, the event object is created 
h2.addEventListener('click', a);

// function a(e) { // e is an event object
//   console.log(e.target); // target property of an event object gives target of an event.
// }

function a() {
  console.log(this); // this gives target of an event
}

// Difference between this and e.target - 

var ul = document.getElementById('list');

ul.addEventListener('click', function(e) {
  console.log(this); // this always gives ul element
  console.log(e.target); // whereas e.target gives specific child of ul 
});



