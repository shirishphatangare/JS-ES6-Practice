// Lecture: Spread Operator


 // ES5 Array Concatenation
 const numbers1 = [1, 2, 3, 4];
 const numbers2 = [5, 6, 7, 8];
 let numbers3 = [];

 numbers3 = numbers3.concat(numbers3);

 numbers3.push(10);

 numbers3 = numbers3.concat(numbers2);
 console.log(numbers3);


// ES6 Array Concatenation - Spread Operator
 const numbers4 = [10, ...numbers1, 20, ...numbers2, 30];
 console.log(numbers4);

// -----------------------------

 // ES5 Array Copy
 let names = ['Jane', 'Bob', 'Alex', 'Ann'];
 let namesCopy1 = names; // Copy by reference - both arrays are updated when one array is updated 
    
 names.push('John');
 console.log(names);
 console.log(namesCopy1);
    
// ES6
// let namesCopy2 = [].concat(names); // ES5 - Avoid Copy by reference
 let namesCopy2 = [...names];  // ES6 - Avoid Copy by reference

 names.push('Jocky');
 console.log(names);
 console.log(namesCopy2);

// -----------------------------

// Pass args to function 
function sum(x, y, z) {

    console.log(x + y + z);

}

let numbers = [10, 20, 30];

//ES5
// sum.apply(null, numbers); // 'this' parameter is null

//ES6 with Spread operator
sum(...numbers);












































































































