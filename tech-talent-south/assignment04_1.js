// TTS JavaScript Assignment 6 Exercise 1

const superHeroes = [["Batman", "Bruce Wayne"], ["Spiderman", "Peter Parker"], ["The Flash", "Barry Allen"]];
const secretIdentity = superHeroes.map(revealArray => `${revealArray[0]} is ${revealArray[1]}`);

console.log(secretIdentity.join('\n')); // Output below:
/*
Batman is Bruce Wayne
Spiderman is Peter Parker
The Flash is Barry Allen
*/

// Better Solution
const secretIdentity2 = superHeroes.map(revealArray => revealArray.join(' is '));
console.log(secretIdentity2.join('\n'));
