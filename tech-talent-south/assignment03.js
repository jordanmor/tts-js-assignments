// TTS JavaScript Assignment 4

function outer(){
	let a = "horse";
	let b = {
		name: "Ed",
		numOfLegs: 4
	}
	function inner(a, b) {
		a = "ape";
		b = {
			name: "Brett",
			numOfLegs: 2
		};
		b.name = "Heather";
		console.log("Inner a:", a);
		console.log("Inner b:", b);
	}
 
	inner(a, b);
	console.log("Outer a:", a);
	console.log("Outer b:", b);
 }
 
 outer();