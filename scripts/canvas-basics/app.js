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
		this.dirX = 1;
		this.dirY = 1;
	}

	update() {
		this.x += this.speedX * this.dirX;
		this.y += this.speedY * this.dirY;
		this.hue++;

		if (this.hue > 360) {
			this.hue = 0;
		}

		if (this.x < 0) {
			// offscreen left so move right
			this.dirX = 1;
		} else if (this.x + this.width > canvas.width) {
			// offscreen right so move left
			this.dirX = -1;
		}

		if (this.y < 0) {
			// offscreen top so move down
			this.dirY = 1;
		} else if (this.y + this.height > canvas.height) {
			// offscreen bottom so move up
			this.dirY = -1;
		}
	}

	draw() {
		ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 100%)`;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

let s1 = new SquareShape(0, 0);

let shapes = [];

for (let i = 0; i < 100; i++) {
	shapes.push(new SquareShape(0, 0));
}

let lastTime = 0;

function drawLoop(timestamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timestamp - lastTime;
	lastTime = timestamp;

	s1.draw();
	s1.update();

	for (const shape of shapes) {
		shape.update();
		shape.draw();
	}

	window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);
