// Lecture: Objects - Part 1
// Objects are collection of related variables and functions, which are represented as name/value pairs

// Object creation using literal notation - Recommended
var person1 = { 
    hobby: 'reading', 
    edcucation: 'Masters'
};

person1.game = 'Ninja';
person1['age'] = 22;


console.log(person1);


// ------------------------


// Object creation using constructor notation
var person = new Object();

person.firstname = 'John';

person.lastname = 'Smith';

person.son = new Object();

person.son.name = 'Nick';

person.son.age = 5;

console.log(person);


// ------------------------


var person2 = new Object();

var job = 'profession';

var name = 'firstname';

person2.name = 'John';

person2.name = 'Bob'; // // With . we can't use variables

person2[job] = 'instructor'; // With [] we can use variables

console.log(person2);

console.log(person2.firstname);

console.log(person2['lastname']);










