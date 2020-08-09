// Lecture: Loops - Part 1


var arr = ['John', 'Nick', 'Bob', 'Michael', 'Mary'];

 for(var i = 0; i < 5; i++) {

     console.log(arr[i]);

 }


// ----------------------

for(var i = 0; i < arr.length; i++) {

    if(arr[i] === 'Bob') {

        console.log(arr[i] + ' is my brother');
        //break;
        continue;

    }

    console.log(arr[i]);

}

 console.log(arr);































