(function(){
	var Pokemon = require('./Pokemon');
	var pokemons = Pokemon.getAll();
	var $Pokemons = $('.Pokemons');
	var PokeCard = [
		'<article class="Pokemon">',
			'<figure class="Pokemon-img" id="imgPokemon"><img src=":img:"></figure>',
			'<div class="Pokemon-info">',
				'<h2 class="Pokemon-info-name">:name:</h2>',
				'<button> <b>More info</b></button>',
			'</div>',
		'</article>'
	].join('');

	pokemons.forEach(function(p){
		var nomb = p.name;
		var res = '../api/img/'+nomb.toLowerCase()+'.jpg';
		var card = PokeCard
			.replace(':name:', p.name)
			.replace(':img:', '../api/img/'+p.name.toLowerCase()+'.jpg')
		//console.log(res);
		//$('.Pokemon-img').attr('backgroundImage','../api/img/abra.jpg');
		$('.Pokemons').append(card);
	});
})()