// Exercise 1
const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa','coffee'];
shoppingList.push('fruit loops');
shoppingList[4] = 'fair trade coffee';
shoppingList.splice(2,2,'rice', 'beans');
const shoppingCart = [];
shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.shift());
while(shoppingList.length > 0) {
  shoppingCart.push(shoppingList.shift());
}
shoppingCart.sort().reverse();
console.log(shoppingCart.join(', '));
// Answer: "rice, ramen noodles, pop tarts, fruit loops, fair trade coffee, beans"

// Exercise 2
const course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

const courseName = course.name; // 'JavaScript Applications'
const teacher2 = course.teachers[1]; // 'Shane'
const student1 = course.students[0].name; // 'Steve'
const katysComputerType = course.students[1].computer.type; // 'macbook'
const preReqsEquipmentObj = course.preReqs.equipment; // { laptop: true, OSOptions: [ 'linux', 'osx' ] }
const preReqsOSOption2 = course.preReqs.equipment.OSOptions[1]; // 'osx'
const preReqsOSOptions = course.preReqs.equipment.OSOptions.join(' or '); // 'linux or osx'

const studentsUsingOSX = [];
for(let student of course.students) {
  if(student.computer.OS === 'OSX') {
    studentsUsingOSX.push(student.name);
  }
}
console.log(studentsUsingOSX); // [ 'Katy', 'Chuck' ]
