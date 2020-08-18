// Lecture: Events - Part 3


// Little trick to pass arguments to a function on event

// var h2 = document.querySelector('header h2');
//
// h2.addEventListener('click', function() {
//   a(5, 10);
// });
//
//
// function a(x, y) {
//   console.log(x * y);
// }


// ------------------------------

// Event bubbling - sequqnce of event firing from inner to outer elements in DOM Tree

// Event Capturing - sequqnce of event firing from outer to inner elements in DOM Tree

// Event bubbling or Event capturing is controlled by third boolean argument of addEventListener().

// By default third arg is false - indicates Event bubbling

// true - indicates Event capturing

 var div = document.querySelector('div.wrapper'); // div element with class 'wrapper'
 var header = document.querySelector('header'); // header tag
 var h2 = document.querySelector('header h2'); // h2 tag which is child of header tag

 div.addEventListener('click', function() {
   var delay = new Date().getTime() + 1000;
   while(new Date() < delay) {}
   console.log('From div');
 }, true);

 header.addEventListener('click', function() {
   var delay = new Date().getTime() + 1000;
   while(new Date() < delay) {}
   console.log('From header');
 }, true);

 h2.addEventListener('click', function() {
   var delay = new Date().getTime() + 1000;
   while(new Date() < delay) {}
   console.log('From h2');
 }, true);

// ----------

// First JS executes all the code and then event code is executed - Here sequence is 1-2-3 

// var h2 = document.querySelector('header h2');

// h2.addEventListener('click', function() { // 3
//     console.log('From click event');
//   });

//   function a() {
//     var delay = new Date().getTime() + 3000;
//     while(new Date() < delay) {}
//     console.log('From function a');
//   }

//   a(); // 1

//   console.log('Global code is executed'); // 2


