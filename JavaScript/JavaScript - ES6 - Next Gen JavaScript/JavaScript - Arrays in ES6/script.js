// Arrays in ES6


// One of the important goals of ES6 revision was to minimize the amount of code.

// 1) Arrays in ES6

const lis = document.getElementsByTagName('li');

// lis is HTMLCollection
 console.log(lis);

// Convert HTMLCollection to Array
 const lisArr = Array.from(lis);
 console.log(lisArr);

// Using ES6 forEach() function for Array
// Array.from(lis).forEach(li => {  
// Arrow function in ES6 - Works like Lambda function
//     li.addEventListener('click', () => {
//         li.classList.toggle('change');
//     });
// });


// Using for-of ES6 construct for HTMLCollection
for(let li of lis) {
    li.addEventListener('click', () => {
        li.classList.toggle('change');
    });
}

// ----------------------------------

// 2) Array Helpers - forEach()

var names = ['Alex', 'Mary', 'Nick', 'Jane'];

// Normal For loop
for(var i = 0; i < names.length; i++) {
    console.log('The name is ' + names[i]);
}

console.log('----------------------------');

// forEach loop
names.forEach(function(name) {
    console.log('The name is ' + name);
}); 

// -----------------------------------------

//3) Array Helpers - every() / some()

var persons = [
    {firstname: 'John', age: 28},
    {firstname: 'Mary', age: 17},
    {firstname: 'Nick', age: 25},
    {firstname: 'Jane', age: 40}
];

var everyPersonCanVote = true;
var onlySomePersonsCanVote = false;

// Using general for loop
for(var i = 0; i < persons.length; i++) {
    if(persons[i].age < 18) {
        everyPersonCanVote = false;
        onlySomePersonsCanVote = true;
    }
}

console.log('Every person can vote - ' + everyPersonCanVote);

console.log('Only some persons can vote - ' + onlySomePersonsCanVote);

var x = 0;

//var every = persons.every(function(person) {
//    console.log(++x + ' - ' + (person.age >= 18));
//    return person.age >= 18;
//});

// Using Arrow function
var every = persons.every(person => {
    console.log(++x + ' - ' + (person.age >= 18));
    return person.age >= 18;
});

console.log(every);


// Using Arrow function
var some = persons.some(person => {
    console.log(++x + ' - ' + (person.age < 18));
    return person.age < 18;
});

console.log(some);

// ---------------------------

// 4) Array Helpers - filter() / find()

var persons = [
    {firstname: 'Mary', gender: 'female'},
    {firstname: 'John', gender: 'male'},
    {firstname: 'Jane', gender: 'female'},
    {firstname: 'Bob', gender: 'male'}
];

var males = [];

// General for loop
for(var i = 0; i < persons.length; i++) {
    if(persons[i].gender === 'male') {
        males.push(persons[i]);
        // break; // Imitation of find() helper
    }
}

console.log(persons);
console.log(males);

console.log('------------------------');

// Using filter() Array helper
var females1 = persons.filter(function(person) {
    return person.gender === 'female';
});

console.log(persons);
console.log(females1);


// Using find() Array helper - Stops iteration on first match
var females2 = persons.find(function(person) {
    return person.gender === 'female';
});

console.log(persons);
console.log(females2);

// ---------------------------

// 5) Array Helpers - map()

var numbers = [1, 2, 3, 4, 5];
var newArr = [];

// Normal for loop
for(var i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] * 10);
}

console.log(numbers);
console.log(newArr);

console.log('------------------');

// map() array helper on an array

//var mapArr = numbers.map(function(number) {
//    return number * 10;
//});


// Rewrite using Arrow function
var mapArr = numbers.map(number => {
    return number * 10;
});

console.log(numbers);
console.log(mapArr);

console.log('--------------------------');

var persons = [
    {firstname: 'John', lastname: 'Smith'},
    {firstname: 'Bob', lastname: 'Brown'},
    {firstname: 'Nick', lastname: 'Doe'}
];

var getFirstNames = persons.map(function(person) {
    return person.firstname;
});

console.log(persons);
console.log(getFirstNames);

// -----------------------------------

// 6) Array Helpers - reduce()

var numbers = [100, 200, 300];
var sum = 0;

// General for loop
for(var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

console.log('-------------------------');

var total = numbers.reduce(function(previous, number) {
    return previous + number;
}, 0); // '0' is initial value of previous

console.log(total);

console.log('-----------------------');

var weeklyEarnings = [750, 642, 823, 1456];

var income = weeklyEarnings.reduce(function(previous, weeklyEarning) {

    return previous + weeklyEarning;

}, 5000); // 5000 is initial value of previous

console.log(income);

console.log('---------------------------');

var firstnames = ['John', 'Jane', 'Mary'];

var lastnames = ['Smith', 'Brown', 'Doe'];

var fullnames = firstnames.reduce(function(previous, firstname, index) {

    previous.push(firstname + ' ' + lastnames[index]);

    return previous;

}, []); // [] is initial value of previous

console.log(fullnames);











































