var Pokemon = {
	getAll: function () {
		var pokemons = [];
		$.ajax({
			async : false,
			url: 'http://localhost:8080/api/pokemons.json',
			success: function (p) {
				pokemons = p;
			}
		});
		return pokemons;
	}
}

module.exports = Pokemon;