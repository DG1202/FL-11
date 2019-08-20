function Pockemon() {
	this.element = 'fire';
	this.specie = 'Flame Pokémon';
	this.fly = false;
	this.nextLevel = Charizard;
}

Pockemon.prototype = {
	getType: function () {
		return this.element;
	},
	getSpecie: function () {
		return this.specie;
	},
	canFly: function () {
		return this.fly;
	},
	getPokemonType: function () {
		return this.pokemonType.name;

	},
	evolve: function () {
		if (this.nextLevel !== this.pokemonType) {
			const NewLevel = this.nextLevel;
			return new NewLevel();
		}
		return this;
	}
};

function Charmander() {
	Pockemon.call(this);
	this.specie = 'Lizard Pokémon';
	this.nextLevel = Charmeleon;
	this.pokemonType = Charmander;
}
function Charmeleon() {
	Pockemon.call(this);
	this.pokemonType = Charmeleon;

}
function Charizard() {
	Pockemon.call(this);
	this.fly = true;
	this.pokemonType = Charizard;
}
function Raichu() {
	Pockemon.call(this);
	this.specie = 'Mouse Pokémon';
	this.nextLevel = Raichu;
	this.pokemonType = Raichu;
}
function Pichu() {
	Raichu.call(this);
	this.nextLevel = Pikachu;
	this.pokemonType = Pichu;
}
function Pikachu() {
	Raichu.call(this);
	this.pokemonType = Pikachu;
}

const pockemons = [Charmander, Charmeleon, Charizard, Pichu, Pikachu, Raichu];
pockemons.forEach(pockemon => {
	pockemon.prototype = Object.create(Pockemon.prototype);
	pockemon.prototype.constructor = pockemon;
});

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType()); // -> “Fire”
console.log(charmander.getType() === charmeleon.getType()); // -> true
console.log(charmeleon.getType() === charizard.getType()); // -> true

console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true

console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true

console.log(charmander.canFly()); // -> false
console.log(charmander.canFly() === charmeleon.canFly()); // -> true
console.log(charizard.canFly()); // -> true


const pichu = new Pichu();
console.log(pichu.getPokemonType()); // => Pichu

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType()); // Pikachu
console.log(pikachu.constructor === Pikachu); // true

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType()); // Raichu
console.log(raichu.constructor === Raichu); // true

const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
console.log(raichu2 === raichu);