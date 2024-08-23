//@ts-check
// this variable is a number
let intelligenceQuotient = 100;

// first name is a string
let firstName = "Sawyer";
let lastName = "Smith";

// I can reassign a variable's value
firstName = "John";

// these are constants and cannot be reassigned
const MIN_IQ = 50;
const MAX_IQ = 300;

//MIN_IQ = 100;

// Boolean values are true or false
let isWillTheCoolest = true;

// currently undefined
let dontKnow;

// null is a value that has no value
let intoTheVoid = null;

console.log(firstName, lastName, "has IQ", intelligenceQuotient);

// this is an object definition
let myPet = {
	type: "Dog",
	name: "Louie",
	ageInHumanYears: 9,
	color: "black",
};

myPet.color = "brown";
myPet.Color = "black";
console.log("myPet looks like this", myPet);

// arrays are fun!
let favCandies = [
	"War Heads",
	"Black Licorice",
	"Skittles JUST Skittles",
	"Snickers",
	true,
	90000000,
	myPet,
];

console.log("my fav candies are:", favCandies);
// arrays start counting from zero
console.log("my fav candies at index 2 is:", favCandies[2]);
