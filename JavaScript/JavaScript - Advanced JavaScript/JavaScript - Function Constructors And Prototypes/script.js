// Lecture: Function Constructors And Prototypes


// Manually created function constructors and prototypes

// 1) Object case -- Literal notation

// var b = {}; // NO function prototype object here. ONLY Global Object function prototype Object


// 2) Normal Function case 

// function a() {}

// console.log(a.prototype); // prototype Object of function 'a' object (this object is accessed using prototype property)

// console.log(a.prototype.__proto__); // prototype object of Global Object function (This object is accessed using __proto__property of function 'a' prototype Object)


// 3) Object case -- Function Constructor notation

// It has access to prototype object of Global Object function (This object is accessed using __proto__property of Person prototype Object)



function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  
  // Adding function this way is memory-inefficient. Function is added for each new object.
    
  // this.getFullName = function() {
  //   return this.firstname + ' ' + this.lastname;
  // }
}

var person = new Person('Johnny', 'Jackson');
console.log(person.prototype); // prototype object can not be accessed via object reference
console.log(Person.prototype); // prototype object can be accessed using function constructor 



// Adding function as below is memory efficient as it is part of Person prototype object
Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

// Adding property in Person prototype object
Person.prototype.greet = 'Hello from prototype object';

var person1 = new Person('John', 'Smith');
console.log(person1.greet);
person1.greet = 'Hello from person1 object';
console.log(person1.greet);
console.log(Person.prototype.greet);

var person2 = new Person('Nick', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person2.greet);


// Prototype chaining

// If all 3 objects have same property then priority is as below --

//property in person1 object 1st priority  
//property in Person.prototype object 2nd priority  
//property in Global Object function  3rd priority  





