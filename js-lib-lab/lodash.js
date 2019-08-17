/*---- The following exercises were completed using Node ----*/

const _ = require('lodash'); // Load lodash

/*=======================
         Task 1
 =======================*/

// The following code is used to break the array up into smaller arrays.
console.log("\nChunk test");
const arr = [1, 4, 5, 12, 55, 24, 69, 13, 5, 8, 12];
const newArr = _.chunk(arr, 3);
console.log(newArr); // [ [ 1, 4, 5 ], [ 12, 55, 24 ], [ 69, 13, 5 ], [ 8, 12 ] ]

/*=======================
         Task 2
 =======================*/

//  For each element in the array, the function is being called and the element is being passed in a value 
console.log("\nForEach test");
 _.forEach(newArr, value => console.log(value));
/* Output:
[ 1, 4, 5 ]
[ 12, 55, 24 ]
[ 69, 13, 5 ]
[ 8, 12 ]
*/

/*=======================
         Task 3
 =======================*/

/*
Add the code to view the individual entries of the newly formed arrays
The result should look like: 
[ 1, 4, 5 ]
1
4
5
...
*/

console.log("\nForEach individual entries test");
_.forEach(newArr, innerArr => {
    console.log(innerArr);
    _.forEach(innerArr, value => console.log(value))
});
/* Output:
[ 1, 4, 5 ]
1
4
5
[ 12, 55, 24 ]
12
55
24
[ 69, 13, 5 ]
69
13
5
[ 8, 12 ]
8
12
*/

/*=======================
         Task 4
 =======================*/

/*
Using the _.range() method, create arrays with the ranges listed below 
and print out their individual elements.
Then break them up with the _.chunk() function to create new arrays.
These can all be done in single statements.
*/

// Range 1 - 20
console.log("\nRange & Chunk Test | Range 1 - 20");
_.forEach(_.chunk(_.forEach(_.range(1,21), value => console.log(value)), 4), chunk => console.log(chunk));
// 50-100
console.log("\nRange & Chunk Test | Range 50 - 100");
_.forEach(_.chunk(_.forEach(_.range(50,101), value => console.log(value)), 6), chunk => console.log(chunk));
// 1-100, only even
console.log("\nRange & Chunk Test | Range 1 - 100, even only");
_.forEach(_.chunk(_.forEach(_.range(2,101, 2), value => console.log(value)), 5), chunk => console.log(chunk));
// 1-100, only odd
console.log("\nRange & Chunk Test | Range 1 - 100, odd only");
_.forEach(_.chunk(_.forEach(_.range(1,100, 2), value => console.log(value)), 5), chunk => console.log(chunk));
// 1-500, only multiples of 20.
console.log("\nRange & Chunk Test | Range 1 - 500, only multiples of 20");
_.forEach(_.chunk(_.forEach(_.range(20,501, 20), value => console.log(value)), 5), chunk => console.log(chunk));
/* Output of last task:
20
40
60
...
500
[ 20, 40, 60, 80, 100 ]
[ 120, 140, 160, 180, 200 ]
[ 220, 240, 260, 280, 300 ]
[ 320, 340, 360, 380, 400 ]
[ 420, 440, 460, 480, 500 ]
*/

/*=======================
         Task 5
 =======================*/

const residents = [
    {"id": 1, "name": "Tom Henry", "state": "TX"},
    {"id": 2, "name": "Sally Newman", "state": "FL"},
    {"id": 3, "name": "Ryan Busch", "state": "CO"},
    {"id": 4, "name": "Brenda Miller", "state": "KS"},
    {"id": 5, "name": "Ed Cage", "state": "NC"},     
    {"id": 6, "name": "Will Turner", "state": "KS"},
    {"id": 7, "name": "Dawn Williams", "state": "NC"},
    {"id": 8, "name": "Sean Cunningham", "state": "NC"},
    {"id": 9, "name": "Ted Hardy", "state": "TX"},
    {"id": 10, "name": "Bruce Mathis", "state": "FL"},
    {"id": 11, "name": "Billy Smith", "state": "FL"},
    {"id": 12, "name": "Clara Jarvis", "state": "TX"},
    {"id": 13, "name": "Cindy Fisher", "state": "CO"},
    {"id": 14, "name": "Gino Donovan", "state": "CO"},
    {"id": 15, "name": "Nancy Curtis", "state": "NC"}
];

// Using the documentation for the _.filter() function, 
// create a statement that prints the number of residents in Colorado.
console.log("\nFilter residents by state of Colorado test");
console.log(_.filter(residents, resident => resident.state == "CO"));
/* Output:
[
  { id: 3, name: 'Ryan Busch', state: 'CO' },
  { id: 13, name: 'Cindy Fisher', state: 'CO' },
  { id: 14, name: 'Gino Donovan', state: 'CO' }
]
*/

/*=======================
         Task 6
 =======================*/

// Using the documentation for the _.countBy() function 
// create statements that print out the number of residents in each state.
console.log("\nPrint out the number of residents in each state");
_.forEach(_.countBy(residents, resident => resident.state), (value, key) => console.log(`There are ${value} residents living in ${key}.`));

/*=======================
         Task 7
 =======================*/

// Using the _.filter() function and any necessary string methods, 
// find and display all the people who have a last name of 7 more letters.

// Vanilla JavaScript
console.log("\nFind residents with last names of 7+ letters using vanilla JavaScript");
console.log(residents.filter(resident => resident.name.split(' ')[1].length >= 7));
// Lodash
console.log("\nFind residents with last names of 7+ letters using Lodash");
console.log(_.filter(residents, resident => _.split(resident.name, ' ')[1].length >= 7));
/* Output:
[
  { id: 7, name: 'Dawn Williams', state: 'NC' },
  { id: 8, name: 'Sean Cunningham', state: 'NC' },
  { id: 10, name: 'Bruce Mathis', state: 'FL' },
  { id: 14, name: 'Gino Donovan', state: 'CO' }
]
*/

/*=======================
         Task 8
 =======================*/

// Use the forEach loop and appropriate string function to print the state in all lower case. 
console.log("\nPrint residents with the state in all lower case");
const residentsCopy = _.cloneDeep(residents); // Prevents changes to the original residents array
console.log(_.forEach(residentsCopy, resident => resident.state = resident.state.toLowerCase()));
/* Output:
[
  { id: 1, name: 'Tom Henry', state: 'tx' },
  { id: 2, name: 'Sally Newman', state: 'fl' },
  ...
  { id: 14, name: 'Gino Donovan', state: 'co' },
  { id: 15, name: 'Nancy Curtis', state: 'nc' }
]
*/

/*=======================
         Task 9
 =======================*/

// Then alter the function to print it capitalized.
console.log("\nPrint residents with the state capitalized");
const residentsCopy2 = _.cloneDeep(residents); // Prevents changes to the original residents array
console.log(_.forEach(residentsCopy2, resident => resident.state = resident.state.charAt(0)  + resident.state.substring(1).toLowerCase()));
/* Output:
[
  { id: 1, name: 'Tom Henry', state: 'Tx' },
  { id: 2, name: 'Sally Newman', state: 'Fl' },
  ...
  { id: 14, name: 'Gino Donovan', state: 'Co' },
  { id: 15, name: 'Nancy Curtis', state: 'Nc' }
]
*/