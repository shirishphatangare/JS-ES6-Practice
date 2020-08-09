// Lecture: Objects - Part 2


// var person = {
//     firstname: 'John',
//     lastname: 'Smith',
//     age: 27,
//     daughter: {
//         name: 'Mary',
//         age: 5
//     },
//     myFunc: function(daughterName, fatherName, daughterAge) {

//         console.log(daughterName + ' is a daughter of ' + fatherName + ' and she is ' + daughterAge + ' years old');

//     }
// }

// console.log(person);
// console.log(person.daughter.name);

// call function with individual args
// person.myFunc(person.daughter.name, person.firstname, person.daughter.age);


// -----------------------------


var person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27,
    daughter: { // Anonymous Object as an object property
        name: 'Mary',
        age: 5
    },
    myFunc: function(par) { // Anonymous function as an object property 

        console.log(par.daughterName + ' is a daughter of ' + par.fatherName + ' and she is ' + par.daughterAge + ' years old');

    }
}

console.log(person);
console.log(person.daughter.name);

person.myFunc({daughterName: 'Jessy', fatherName: 'Michael', daughterAge: 5}); // Anonymous Object as a function argument



/*

1) Anonymous array - []
2) Anonymous Object - {}
3) Anonymous function - function(){}

*/


































