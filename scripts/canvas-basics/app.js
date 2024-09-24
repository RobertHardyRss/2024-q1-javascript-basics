//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is an CanvasRenderingContext2D
const ctx = canvas.getContext("2d");

class SquareShape {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.width = 50;
		this.height = this.width;
		this.hue = 0;

		this.speedMult = 11;
		this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
		this.speedY = Math.floor(Math.random() * this.speedMult) + 1;
	}

	update() {
		this.x += this.speedX;
		this.y += this.speedY;
		this.hue++;
	}

	draw() {
		ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 100%)`;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

let s1 = new SquareShape(0, 0);

let lastTime = 0;

function drawLoop(timestamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timestamp - lastTime;
	lastTime = timestamp;

	s1.draw();
	s1.update();

	window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);
 