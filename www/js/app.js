App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
	this.resource("recipes", function(){
		this.route('show', { path: '/:recipe_id' });
	})
});

App.Recipe = Ember.Object.extend({
	name: null,
	type: null
})

App.IndexRoute = Ember.Route.extend({
  model: function() {
    var url = "http://thebrewersbarrel.com/";
		var recipes = [];
    return $.ajax({
       url: url + "recipes.json",
       success: function(data){
         data.forEach(function(recipe){
					recipes.push(App.Recipe.create({
						name: recipe.name,
						type: recipe.recipe_type
					}));
				 });
				return recipes;
			}
    });
  }
});