//@ts-check

class Cheese {
	constructor(type) {
		this.type = type;
		this.color = "yellow";
		this.age = 0;
		this.cost = 0.0;
	}

    eat() {
        console.log(`Nom nom nom ${this.type} is yummy!`);
    }
}

let cheddar = new Cheese("Cheddar");
let swiss = new Cheese("Swiss");
swiss.color = "white";

let gouda = new Cheese("Gouda");

gouda.eat();
cheddar.eat();