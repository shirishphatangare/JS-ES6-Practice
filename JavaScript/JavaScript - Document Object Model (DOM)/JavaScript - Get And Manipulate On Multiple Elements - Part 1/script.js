// Lecture: Get And Manipulate On Multiple Elements - Part 1


/* getElementsByClassName returns a collection (NOT array) of all elements in the document with specified class name. */

var icons = document.getElementsByClassName('fa');
console.log(icons); // icons type is HTMLCollection
console.log(icons[0]); // HTMLCollection element can be accessed same as an array
console.log(icons[1]);

// HTMLCollection can be iterated over same like an array
for(var i = 0; i < icons.length; i++) {
    console.log(icons[i]);
}


// Array built-in methods can not be used on HTMLCollection.
// First HTMLCollection should be converted to an array,
// then we can use Array built-in methods

// icons.push('Hello'); // Error!
 var iconsArr = Array.from(icons);
 console.log(iconsArr);
 console.log(icons);

iconsArr.push("Hello"); // Works!
console.log(iconsArr); 














