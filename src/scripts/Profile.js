var Pokemon = require('./Pokemon');

var Profile = {
	getPokemon: function(id){
		$Content.html('');

		var pokemons =  Pokemon.getAll();

		var pokemon = pokemons.filter(function(p){
			return (p.id === id);
		});
		pokemon = pokemon[0];
		$Content.append(pokemon.name)
	}
}

module.exports = Profile;