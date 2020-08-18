// Lecture: Get And Set Attributes


 var div = document.querySelector('div.wrapper');
 console.log(div.getAttribute('class'));
 console.log(div.getAttribute('id')); // getAttribute() returns null if attribute is not present for that element


// setAttribute('attr','value') - Updates attribute value if present, otherwise adds new attribute with specified value for that element

 console.log(div.setAttribute('style', 'background-color: coral'));
 console.log(div.hasAttribute('style'));
 console.log(div.removeAttribute('style'));
 console.log(div.hasAttribute('style'));




 var btn = document.getElementById('add-btn');
 var input = document.getElementById('add-input');

 btn.addEventListener('click', function(e) {
   e.preventDefault(); // Prevent default behavior of submit button 
  
   input.setAttribute('type', 'submit');
   input.setAttribute('value', input.value);
 });























