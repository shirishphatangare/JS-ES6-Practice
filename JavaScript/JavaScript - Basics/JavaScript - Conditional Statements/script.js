// Lecture - Conditional Statements

var myChild = 'Alexis';
var gender = 'male';
// var gender = 'female';

// if-else statement
if(gender === 'male') {
  console.log(myChild + ' is my son ');
} else {
  console.log(myChild + ' is my daughter');
}

// Else If Statement And Logical Operators


//var prof = 'instructor';
// var prof = 'doctor';
 var prof = 'engineer';

// if-else if-else statement
if(prof === 'instructor') {
  console.log(prof + ' teaches students');
} else if(prof === 'doctor') {
  console.log(prof + ' treates people');
} else if(prof === 'composer') {
  console.log(prof + ' creates the music');
} 
//   else if(prof === 'doctor') {
//   console.log(prof + ' creates the music');
// } 
  else {
  console.log('professions do not match');
}

// Logical AND
if(5 === 5 && 4 === 4) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}

if(5 === 4 && 4 === 4) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}

// Logical OR
if(5 === 4 || 4 === 4) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}

if(5 === 4 || 4 === 3) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}

// Logical NOT
if(!true) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}








