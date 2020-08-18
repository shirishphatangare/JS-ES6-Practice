// Lecture: The Special Keyword 'this'


console.log(this); // this' refers to window object
console.log(this === window);

function a() {
  console.log(this);
  console.log(this === window);

  function b() {
    console.log(this);
    console.log(this === window); // 'this' refers to window object
  }

  b();

}

a();

// ----------------------------
// In case of function inside an object, 'this' refers to the object itself and NOT the global object (window)
var firstname = 'Bob';

var per = {
  firstname: 'John',
  lastname: 'Smith',
  getFullName: function() {
    var that = this;
    // console.log(this === per);
    // return per.firstname + ' ' + per.lastname;
    // return this.firstname + ' ' + this.lastname;
    console.log(this.firstname + ' ' + this.lastname);

    function greet() {
      console.log('Hi ' + this.firstname);  // 'this' here refers to global object like it would do in any other normal function.  
      console.log('Hi ' + that.firstname); // 'that' points to per object
    }
    greet();
  }
};

per.getFullName();

// --------------------

var per1 = {
  firstname: 'Nick',
  lastname: 'Doe'
};

per1.getFullName = per.getFullName; // per1 gets function reference to per.getFullName

per1.getFullName(); // Note how 'this' keyword behaves here for per1 
