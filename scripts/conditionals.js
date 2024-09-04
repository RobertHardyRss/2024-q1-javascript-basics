//@ts-check

let isTheSkyBlue = false;
let isTheSunUp = false;

if (isTheSkyBlue) {
	isTheSunUp = false;
	// this will run if true
	console.log("The sky is indeed blue");
} else if (!isTheSunUp) {
	let grassColor = "dark green";
	console.log("It must be night and the grass is ", grassColor);
} else {
	// this will run if false
	console.log("It must be cloudy or a solar eclipse");
}

console.log(isTheSkyBlue, isTheSunUp);
