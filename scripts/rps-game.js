//@ts-check

let playerControls = document.getElementById("player-controls");
let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");

function rockClicked(name) {
	console.log("rock was selected");
}

function paperClicked(name) {
	console.log("paper was selected");
}

function scissorsClicked(name) {
	console.log("scissors was selected");
}

btnRock?.addEventListener("click", rockClicked);
btnPaper?.addEventListener("click", paperClicked);
btnScissors?.addEventListener("click", scissorsClicked);
