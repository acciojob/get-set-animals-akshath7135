
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return this._species;
	}
	makesound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log("purr");
	}
}
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const myCat = new Cat("Siamese");
myCat.makesound();
myCat.purr();
const mydog= new Dog("Golden Retriever");
mydog.makesound();
mydog.bark();

