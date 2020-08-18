// Lecture: Function Constructor


// 1) Way 1 of object creation using literal notation 

var person1 = {};
person1.firstname = 'John';
person1.lastname = 'Smith';

var person2 = {};
person2.firstname = 'Nick';
person2.lastname = 'Doe';

// 2) Way 2 of object creation using function - without params

// function createPerson() {
//   var newPerson = {};
//   newPerson.firstname = 'Bob';
//   newPerson.lastname = 'Brown';
//   return newPerson;
// }

// 3) Way 2 of object creation using function - with params
// Create multiple objects using literal notation

// function createPerson(firstname, lastname) {
//   var newPerson = {};
//   newPerson.firstname = firstname;
//   newPerson.lastname = lastname;
//   return newPerson;
// }


// Function Constructor to Create multiple objects dynamically using Constructor notation

function Person(firstname, lastname) {
  
  this.firstname = firstname; // With new operator in constructor call, 'this' represents a new Person object,  otherwise it represents a property in global Window object
  this.lastname = lastname;
  
}

var person3 = new Person('Bob', 'Brown');
var person4 = new Person('Mary', 'James');

// console.log(this);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);


// Built-in Function Constructor for String
var strObj = new String('Hello');
console.log(strObj);
console.log(typeof strObj);

// Built in Function Constructors -- 
// new Object()
// new Array()
// new Date()
// new Number()
// new String()

















