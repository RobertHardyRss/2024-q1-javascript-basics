//@ts-check

let playerControls = document.getElementById("player-controls");

let isGameOver = false;

let weapons = [
	{
		type: "Rock",
		beats: "Scissors",
	},
	{
		type: "Paper",
		beats: "Rock",
	},
	{
		type: "Scissors",
		beats: "Paper",
	},
];

function pickRandomWeapon(weapons) {
	let randy = Math.floor(Math.random() * weapons.length);
	return weapons[randy];
}

function determineOutcome(playerWeapon, computerWeapon) {
	if (playerWeapon.type === computerWeapon.type) {
		return "It's a tie! Try again!";
	}

	isGameOver = true;

	if (playerWeapon.beats === computerWeapon.type) {
		return `Player wins! ${playerWeapon.type} beats ${computerWeapon.type}`;
	}

	return `Computer wins! ${computerWeapon.type} beats ${playerWeapon.type}`;
}

function playerControlHandler(e) {
	// if (isGameOver) {
	// 	return;
	// }

	let weaponName = e.target.innerText;
	let playerWeapon = weapons.find((w) => w.type === weaponName);

	if (!playerWeapon) {
		console.log("ERROR! Player weapon undefined");
		return;
	}

	let computerWeapon = pickRandomWeapon(weapons);

	let result = determineOutcome(playerWeapon, computerWeapon);

	console.log(result);
}

playerControls?.addEventListener("click", playerControlHandler);
