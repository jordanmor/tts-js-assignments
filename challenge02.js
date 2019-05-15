// Exercise 1
const shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa","coffee"];
shoppingList.push("fruit loops");
shoppingList[4] = "fair trade coffee";
shoppingList.splice(2,2,"rice", "beans");
const shoppingCart = [];
shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.shift());
while(shoppingList.length > 0) {
  shoppingCart.push(shoppingList.shift());
}
shoppingCart.sort().reverse();
console.log(shoppingCart.join(", "));
// Answer: "rice, ramen noodles, pop tarts, fruit loops, fair trade coffee, beans"

// Exercise 2
const course = {
	name: "JavaScript Applications",
	awesome: true,
	teachers: ["Assaf", "Shane"],
	students: [
		{
			name: "Steve",
			computer: {
				OS: "Linux",
				type: "laptop"
			}
		},
		{
			name: "Katy",
			computer: {
				OS: "OSX",
				type: "macbook"
			}
		},
		{
			name: "Chuck",
			computer: {
				OS: "OSX",
				type: "macbook"
			}
		}

	],
	preReqs : {
		skills : ["html", "css", "git"],
		equipment: {
			laptop: true,
			OSOptions: ["linux", "osx"]
		}
	}
};

const courseName = course.name; // "JavaScript Applications"
const teacher2 = course.teachers[1]; // "Shane"
const student1 = course.students[0].name; // "Steve"
const katysComputerType = course.students[1].computer.type; // "macbook"
const preReqsEquipmentObj = course.preReqs.equipment; // { laptop: true, OSOptions: [ "linux", "osx" ] }
const preReqsOSOption2 = course.preReqs.equipment.OSOptions[1]; // "osx"
const preReqsOSOptions = course.preReqs.equipment.OSOptions.join(" or "); // "linux or osx"

const studentsUsingOSX = [];
for(let student of course.students) {
  if(student.computer.OS === "OSX") {
    studentsUsingOSX.push(student.name);
  }
}
console.log(studentsUsingOSX); // [ "Katy", "Chuck" ]

// Exercise 3 
 
const appData = {
  name: "GMail",
  mailboxes: {
    inbox: {
			messages: []
		},
    sent: {
			messages: []
		},
    junk: {
			messages: []
		},
		drafts: {
			messages: []
		},
		spam: {
			messages: []
		},
		trash: {
			messages: []
		},
		archive: {
			messages: []
		},
		starred: {
			messages: []
		},
		important: {
			messages: []
		}
	},
  contacts: [
    {
			name: "John", 
			cell: 8602435834,
			email: "johnmcclane@gmail.com",
			address: {
				street: "35 Hoola",
				city: "Rocky Hill",
				state: "CT",
				zip: "06033"
			},
			messages: [
				{
					message: "Cottage cheese melted cheese taleggio",
					mailbox: "inbox",
					tag: []
				},
				{
					message: "Stilton babybel who moved my cheese emmental port-salut brie cheesy feet when the cheese comes out everybody's happy.",
					mailbox: "sent",
					tag: []
				},
				{
					message: "Feta taleggio cut the cheese fromage frais taleggio babybel airedale bavarian bergkase.",
					mailbox: "inbox",
					tag: ["starred"]
				}				
			]
		},
		{
			name: "Katy",
			cell: 2037984234,
			email: "katyshades@gmail.com",
			address: {
				street: "143 Grock",
				city: "New Haven",
				state: "CT",
				zip: "06505"
			},
			messages: [
				{
					message: "Mozzarella cream cheese fromage frais.",
					mailbox: "inbox",
					tag: ["starred", "important"]
				},
				{
					message: "Bavarian bergkase stinking bishop boursin feta smelly cheese cheese and wine danish fontina cheese and wine.",
					mailbox: "sent",
					tag: []
				},
				{
					message: "Bocconcini queso fromage ricotta stinking bishop.",
					mailbox: "draft",
					tag: []
				}				
			]
		},
		{
			name: "Brawn",
			cell: 2037984234,
			email: "brawnfeets@gmail.com",
			address: {
				street: "27 Long St",
				city: "Bethel",
				state: "CT",
				zip: "06801"
			},
			messages: [
				{
					message: "Caerphilly manchego feta.",
					mailbox: "inbox",
					tag: []
				},
				{
					message: "Goat who moved my cheese when the cheese comes out.",
					mailbox: "inbox",
					tag: ["important"]
				},
				{
					message: "Dolcelatte melted cheese swiss.",
					mailbox: "sent",
					tag: []
				}				
			]
		},
		{
			name: "Scrawn", 
			email: "scrawnyheels@gmail.com",
			cell: 8602257774,
			address: {
				street: "8 Light Ave",
				city: "Windsor",
				state: "CT",
				zip: "06006"
			},
			messages: [
				{
					message: "Cottage cheese croque monsieur edam.",
					mailbox: "inbox",
					tag: ["starred"]
				},
				{
					message: "Smelly cheese who moved my cheese bavarian bergkase manchego blue.",
					mailbox: "archive",
					tag: []
				},
				{
					message: "Cheese strings fondue boursin dolcelatte bocconcini red leicester cut the cheese danish fontina.",
					mailbox: "trash",
					tag: []
				}				
			]
		},
  ]
}

// Get a printed list of all inbox names
const inboxNames = [];
for(let mailbox in appData.mailboxes) {
	inboxNames.push(mailbox);
}
console.log(inboxNames.join(", ")); // inbox, sent, junk, drafts, spam, trash, archive, starred, important

// Get a list of contacts' email addresses

const emails = [];
for (contact of appData.contacts) {
	emails.push(contact.email)
}
console.log(emails); // [ "johnmcclane@gmail.com","katyshades@gmail.com","brawnfeets@gmail.com","scrawnyheels@gmail.com" ]

// Print out the text of each contact's second email

const eachContactsSecondEmail = [];
for(let contact of appData.contacts) {
	console.log(`Contact name: ${contact.name}\nSecond message: ${contact.messages[1].message}`);
}

// Populate inbox and sent mailboxes
for(let contact of appData.contacts) {
	for (message of contact.messages) {
		if(message.mailbox === 'inbox') {
			appData.mailboxes.inbox.messages.push(message.message);
		} else if(message.mailbox === 'sent') {
			appData.mailboxes.sent.messages.push(message.message);
		}
	}
}

// Print out all inbox messages
console.log(appData.mailboxes.inbox.messages);
// Print out all sent messages
console.log(appData.mailboxes.sent.messages);
