// Lecture: call(), apply(), bind()

// call(), apply(), bind() - To which object to refer using 'this' variable

var person = {
  firstname: 'John',
  lastname: 'Smith',
  fullname: function() {
    return this.firstname + ' ' + this.lastname;
  }
};


/*var definePerson = function(age, job) {
  console.log(this.fullname() + ' is ' + age + ' years old and he is a ' + job);
};*/

// definePerson(28, 'developer'); // Error since this refers to Global window object


var definePerson = function(age, job) {
  console.log(this.fullname() + ' is ' + age + ' years old and he is a ' + job);
};

// definePerson(28, 'developer');
// bind 'this' to person object and pass args 28 and 'developer'
definePerson.call(person, 28, 'developer');
//apply() works same as call(). args are passed as an array
definePerson.apply(person, [30, 'designer']);

// -----------------------

var nick = {
  firstname: 'Nick',
  lastname: 'Doe'
};

// Bind 'this' to nick object
console.log(person.fullname.call(nick));

// -----------------------

// bind() method

// Step 1 - Bind function to the object
// Step 2 - Execute the function

// var getPerson = definePerson.bind(person);
// getPerson(19, 'student');

// Args can be given in bind() call itself

// var getPerson = definePerson.bind(person, 19, 'student');
// getPerson();

// Another way of passing args to bind()
var getPerson = definePerson.bind(person, 35);
getPerson('musician');
getPerson('driver');











