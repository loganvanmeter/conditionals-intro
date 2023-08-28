"use strict";

let conditionals = [1 + 1 > 5, 4 * 5 <= 20, 6 - 2 >= 0];

for (let i = 0; i < conditionals.length; i++) {
	if (conditionals[i]) {
		console.log(`True fact!`);
	} else {
		console.log(`LIES!`);
	}
}

const likesDogs = true;

if (likesDogs) {
	console.log(`You're a dog person!`);
} else {
	console.log(`You're a cat person!`);
}

const person = {
	name: "Zorro",
	preferredLanguage: "Spanish",
};

if (person.preferredLanguage === "Spanish") {
	console.log(`Hola, ${person.name}!`);
}

let grade = Math.floor(Math.random() * 101);

switch (true) {
	case grade <= 69:
		console.log("You got an F");
		break;
	case grade >= 70 && grade <= 76:
		console.log("You got a D");
		break;
	case grade >= 77 && grade <= 84:
		console.log("You got a C");
		break;
	case grade >= 85 && grade <= 92:
		console.log("You got a B");
		break;
	case grade >= 93:
		console.log("You got an A");
		break;
}
