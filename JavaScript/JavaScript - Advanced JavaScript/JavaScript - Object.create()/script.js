// Lecture: Object.create()


/* 
1) Object.create() is third way of object creation apart from literal and constructor notation. 
2) Allows us to create an object and defines for that object prototype that we want.
3) It is a method of a Global Object function.
*/

// With dir function we can see contents of Global object function 
 console.dir(Object);

 // Object created using create method using prototype of Global Object function 

 var obj1 = Object.create(Object.prototype, {
   name: {
     value: 'John'
   }
 });
 // obj1.name = 'John';

 console.log(obj1);

 var obj2 = {};
 console.log(obj2);

// ------------------

// Object created using create method using prototype of Person function constructor
 function Person() {
   this.name = 'John';
 }

 Person.prototype.greet = 'Hello';

 var person1 = new Person();
 var person2 = Object.create(Person.prototype);

 // Both will have 'greet' property
 console.log(person1);
 console.log(person2);

// ----------------------------

// Object created using create method using manually created anonymous object as a prototype

// Prototype Inheritance hierarchy
var firstProto = {
  sayHello: function() {
    return 'Hello ' + this.name;
  }
};

var john = Object.create(firstProto, {
  name: {
    value: 'John'
  }
});

console.log(john);

var secondProto = Object.create(firstProto, {
  sayHi: {
    value: function() {
    return 'Hi ' + this.name;
    }
  }
});

console.log(secondProto);

var bob = Object.create(secondProto, {
  name: {
    value: 'Bob'
  }
});

console.log(bob);

//---------------------------------

// An empty object with Object prototype is created 
var obj11 = Object.create(Object.prototype)
//var obj11 = Object.create(Object.prototype,{})
console.log(obj11);

// An empty object without Object prototype is created 
var obj22 = Object.create(null);
console.log(obj22);








