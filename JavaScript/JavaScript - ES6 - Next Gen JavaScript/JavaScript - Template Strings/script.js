// Lecture: Template Strings


const name = 'John';

let age = 28;

let profession = 'instructor';

// ES5 String
function personES5() {

    console.log('My name is ' + name + ',\nI\'m ' + age + ' years old and I\'m ' + profession);

}

personES5();

// -----------------------

//ES6 Template Strings
function personES6() {

    return `My name is ${name}, I'm ${age} years old and I'm ${profession}`;

}


// -----------------------

function experience(company1, company2) {

    console.log(`${personES6()}. I have ${company1 + company2} years of experience in programming`);

}

experience(4, 7);

// -----------------------

// ES6 new string methods

let greet = 'Hello my dear student';

console.log(greet.startsWith('hello'));
console.log(greet.endsWith('ent'));
console.log(greet.includes('dear'));
console.log(greet.repeat(3));


// ----------------------------

// Default Parameters

// ES5 way Default Parameters
 function person(firstname, lastname, profession) {

     profession = profession || 'programmer';

     console.log('I am ' + firstname + ' ' + lastname + ' and I am ' + profession);

 }

 person('John', 'Doe');


// ES6 way Default Parameters
function person(firstname = 'John', lastname = 'Smith', profession = 'programmer') {

    console.log(`I am ${firstname} ${lastname} and I am ${profession}`);

}

person();
person('Nick', 'Doe', 'instuctor');









































