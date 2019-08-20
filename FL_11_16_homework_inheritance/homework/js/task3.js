function Pockemon() {
  this.element = 'fire';
  this.specie = 'Flame Pokémon';
  this.fly = false;
  this.nextLevel = Charizard;
}

Pockemon.prototype = {
  getType: function() {
    return this.element;
  },
  getSpecie: function() {
    return this.specie;
  },
  canFly: function() {
    return this.fly;
  },
  getPokemonType: function() {
    return this.pokemonType.name;
  },
  evolve: function() {
    if(this.nextLevel !== this.pokemonType) {
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

