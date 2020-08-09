// Lecture: Arrays - Part 2

var colors = ['white', 'black', 'red'];

colors[1] = 'green'; //'white', 'green', 'red'

colors.push('blue'); // Push at the end - 'white', 'green', 'red', 'blue'

colors.pop(); // Pop from end - 'white', 'green', 'red'

colors.shift(); // remove from start - 'green', 'red'

colors.unshift('purple'); // insert at start - 'purple', 'green', 'red'

console.log(colors.indexOf('brown')); // brown not in array hence index is -1

if(colors.indexOf('blue') === -1) {

    colors.push('blue'); - //'purple', 'green', 'red', 'blue'

    console.log(colors);

}





















