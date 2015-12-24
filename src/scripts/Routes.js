(function(){
	var page = require('page');
	var qs = require('qs');

	page('/', function(ctx, next){
		require('./home');
	});

	page('/pokemon', function(ctx, next){
		var param = qs.parse(ctx.querystring);
		var Profile = require('./Profile');
		Profile.getPokemon(param.id);
	});
	page();
})();