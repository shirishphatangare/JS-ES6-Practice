// Lecture: Project - Edit And Delete Items - Part 2


var ul = document.querySelector('ul');

//**********ADD ITEMS
document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('Hello');

    var addInput = document.getElementById('add-input');
    
    if(addInput.value !== '') {
        var li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;

        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);
        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);
        ul.appendChild(li);
        // console.log(li);
        addInput.value = '';
    }
});

//**********EDIT AND DELETE ITEMS

ul.addEventListener('click', function(e) {

  // console.log(this);
  // console.log(e.target;
  // console.log(e.target.classList[1]);
    
  if(e.target.classList[1] === "fa-pencil-square-o") {
      
   // console.log('Hello');
      var parentPar = e.target.parentNode;
      parentPar.style.display = 'none';
      
      var note = parentPar.previousElementSibling;
      var input = parentPar.nextElementSibling;
      // console.log(note, input);
      
      input.style.display = 'block';
      input.value = note.textContent;
      
      
      // Event object e is keyboardEvent
      input.addEventListener('keypress', function(e) {
        // console.log('Hello');
        // console.log(e);
        if(e.keyCode === 13) { // 13 is keyCode for 'Enter' button
            if(input.value !== '') {
                note.textContent = input.value;
                parentPar.style.display = 'block'; // Show edit and delete buttons
                input.style.display = 'none'; // Hide input element
            } else { // When typed enter key with empty input element - delete the note itself
                var li = input.parentNode;
                console.log(li)
                li.parentNode.removeChild(li); // ?? Uncaught TypeError: Cannot read property 'removeChild' of null
            }
        } 
    });
    
} else if (e.target.classList[1] === "fa-times") { // Delete whole note (li element inside ul) on click of delete icon
    var list = e.target.parentNode.parentNode;
    list.parentNode.removeChild(list);
  }
});
