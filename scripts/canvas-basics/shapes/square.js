//@ts-check

export class SquareShape {
	constructor(x, y, ctx, canvas) {
		this.x = x;
		this.y = y;
		this.ctx = ctx;
		this.canvas = canvas;

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
		} else if (this.x + this.width > this.canvas.width) {
			// offscreen right so move left
			this.dirX = -1;
		}

		if (this.y < 0) {
			// offscreen top so move down
			this.dirY = 1;
		} else if (this.y + this.height > this.canvas.height) {
			// offscreen bottom so move up
			this.dirY = -1;
		}
	}

	draw() {
		this.ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 100%)`;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
