(function(){
	var Pokemon = require('./Pokemon');
	var pokemons = Pokemon.getAll();
	var $Pokemons = $('.Pokemons');
	var PokeCard = [
		'<article class="Pokemon">',
			'<figure class="Pokemon-img"><img></figure>',
			'<div class="Pokemon-info">',
				'<h2 class="Pokemon-info-name">:name:</h2>',
				'<button> <b>More info</b></button>',
			'</div>',
		'</article>'
	].join('');

	pokemons.forEach(function(p){
		var card = PokeCard.replace(':name:', p.name);
		$('.Pokemons').append(card);
	});
})()