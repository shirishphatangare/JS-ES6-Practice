// Lecture: Classes

// ES5 way of object creation using function constructor
function PersonES5(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

// Add new method to PersonES5 using a prototype
PersonES5.prototype.aboutPerson = function() {
    console.log(`My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old`);
}

// ------------

// ES5 prototype inheritance
function DeveloperES5(firstname, lastname, age, experience, projects) {
    // reuse PersonES5 function constructor
    // bind 'this' / DeveloperES5 object to PersonES5 function
    PersonES5.call(this, firstname, lastname, age);
    this.experience = experience;
    this.projects = projects;

}
// Link DeveloperES5.prototype to an object created with PersonES5.prototype. DeveloperES5.prototype now has aboutPerson() method from PersonES5.prototype
DeveloperES5.prototype = Object.create(PersonES5.prototype);

// Add new method aboutDev
DeveloperES5.prototype.aboutDev = function() {

    console.log(`My name is ${this.firstname} ${this.lastname}, I am ${this.age} years old with ${this.experience} years of experience and I have participated in ${this.projects} projects`);

}

const nickES5 = new PersonES5('Nick', 'Smith', 28);

const alexDev = new DeveloperES5('Alex', 'Brown', 30, 10, 5);

nickES5.aboutPerson();

alexDev.aboutPerson();

alexDev.aboutDev();

//nickES5.aboutDev(); // ERROR !

console.log('--------------------------------------------------------');

// ES6 way of class/object creation

class PersonES6 {
    
    // Adding a constructor
    constructor(firstname, lastname, age) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }
    
    // Adding new method
    aboutPerson() { // Notice no 'function' keyword here !

        console.log(`My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old`);

    }

}

console.log(typeof PersonES6) // Type of PersonES6 is function

// ------------

// ES6 inheritance with extends keyword
class DeveloperES6 extends PersonES6 {

    constructor(firstname, lastname, age, experience, projects) {

        super(firstname, lastname, age); // call parent class constructor
        this.experience = experience;
        this.projects = projects;

    }
    
    // Adding new method in child
        aboutDev() {

            console.log(`My name is ${this.firstname} ${this.lastname}, I am ${this.age} years old with ${this.experience} years of experience and I have participated in ${this.projects} projects`);

        }

}

const nickES6 = new PersonES6('Nick', 'Smith', 28);

const bobDev = new DeveloperES6('Bob', 'James', 40, 15, 7);

nickES6.aboutPerson();

bobDev.aboutDev();

bobDev.aboutPerson();

//nickES5.aboutDev(); // ERROR !











































































