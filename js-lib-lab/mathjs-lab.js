const { sqrt, log, simplify, cos, unit } = require("mathjs");

/*
Using the correct math methods, calculate and display the following:
base 10 log of 1000000
base 2 log of 64
base 4 log of 16384
square root of 96
square root of -64
simplify the expression '3x + 4y + 9x + 2y + 8' the cosine of 45 degrees.
*/

// Using the correct math methods, calculate and display the following:

// base 10 log of 1000000
console.log("\nBase 10 of 1000000:", Math.ceil(log(1000000, 10))); // 6

// base 2 log of 64
console.log("\nBase 2 of 64:", log(64, 2)); // 6

// base 4 log of 16384
console.log("\nBase 4 of 16384:", log(16384, 4)); // 7

// square root of 96
console.log("\nSquare root of 96:", sqrt(96)); // 9.797958971132712

// square root of -64
console.log("\nSquare root of -64:", sqrt(-64)); // { re: 0, im: 8 }

// Simplify the expression: '3x + 4y + 9x + 2y + 8'
console.log("\nSimplify the following expression: '3x + 4y + 9x + 2y + 8'")
console.log(simplify('3x + 4y + 9x + 2y + 8').toString()); // 6 * y + 12 * x + 8

// Simplify the expression: the cosine of 45 degrees
console.log("\nSimplify the following expression: the cosine of 45 degrees")
console.log(cos(unit(45, 'deg'))); // 0.7071067811865476