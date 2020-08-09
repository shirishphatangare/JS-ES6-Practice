// Lecture: Date Object


var date = new Date('January 20, 2020 10:14:00');
console.log(date);

// --------------------------

date = new Date();
console.log(date); // Print Current date

var year = date.getFullYear();
console.log(year);

var month = date.getMonth(); // Month - 0-11 starting (Jan-Dec)
console.log(month);

var dte = date.getDate();
console.log(dte);

var day = date.getDay(); // Day 0-6  (Sun-Sat)
console.log(day);

var x = date.setFullYear(1990);
date.setMonth(11);

console.log(date);
console.log(year);
console.log(month);
console.log(x);























