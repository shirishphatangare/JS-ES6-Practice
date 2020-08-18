// Lecture: Map And set

// Map and Set are new ES6 features

// Map - Data in key-value pairs
const mapData  = new Map([
    [10, 'ten'],
    ['isMarried', false],
    [10, false] // Duplicate keys are not allowed. Overwrites previous value
]); // A 2D array with key-value pairs

// Add key-value pairs in a map.
// keys and values can be any primitive or object JS type
mapData.set('name', 'John');
mapData.set(true, 'Yes');
const obj = {};
mapData.set(obj, 'person');

// Map methods

 //mapData.clear(); // Empty Map
 //mapData.delete(10);
 console.log(mapData.has(obj));
 console.log(mapData.get('name'));
 console.log(mapData);
 console.log(mapData.size);

// Iterate over map using forEach()

 mapData.forEach((value, key) => {
     console.log(value, key);
 });

// Iterate over map using for-of

for(let key of mapData.keys()) {
     console.log(key);
}

for(let value of mapData.values()) {
     console.log(value);
}

for(let [key, value] of mapData.entries()) { // Array destructuring
     console.log(key, value);
}

// ------------------------------

// Set - Unique data

const setData = new Set(['John', 10, false, {firstname: 'Bob'}, 'John']); // Array with mixed data types

setData.add('Nick');

console.log(setData.size);

for(let value of setData.values()) {

    console.log(value);

}








































































