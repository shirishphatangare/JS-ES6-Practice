// Lecture: Events - Part 1


// Events make web pages more interactive and dynamic

var h2 = document.querySelector('header h2');


// Below anonymous funcion is executed on click

// h2.onclick = function() {
//     console.log('Clicked');
// }

// Below anonymous funcion is executed on mouseover

// h2.onmouseover = function() {
//     console.log('Mouseover');
// }

// -------------------------

// One onClick and one onMouseover event for same element
// <h2 onclick="a()" onMouseover="b()">Note Manager</h2>

// function a() {
//     console.log('Clicked');
// }


// function b() {
//     console.log('Mouseover');
// }

// -------------------------

// Two onClick events for same element
// <h2 onclick="a()" onclick="b()">Note Manager</h2>
// In this case, only first function a() is ALWAYS executed on click and second function is ignored - 
//addEventListener is the solution for that

function a() {
    console.log('Clicked a');
}


function b() {
    console.log('Clicked b');
}






