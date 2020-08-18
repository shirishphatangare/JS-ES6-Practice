// Lecture: Destructuring

// Destructuring of primitives
const arr = [10, 20, 30, 40, 50, 60];

const [ten, twenty, ...items] = arr; // Rest Operator in action (...items)

//console.log(ten, twenty, items);

console.log(ten, twenty, ...items); // Spread operator in action (...items)

// --------------------

// Destructuring of objects
const person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 30
};

// const {age, firstname, lastname} = person; // property name should match. Sequence doesn't matter

// console.log(age, firstname, lastname);

// -------------------

// const aboutMe = john => {
//     const {firstname, lastname, age} = john;
//     console.log(`I am ${firstname} ${lastname} and I am ${age} years old`);
// }

// aboutMe(person);

// Another succinct way
const aboutMe = ({firstname, lastname, age}) => {
    console.log(`I am ${firstname} ${lastname} and I am ${age} years old`);
}

aboutMe(person);

















































































