function show_template(recipe){
	var html = '<ul class="list inset"><li>Name:<span class="recipe_style">'+recipe.name+'</span></li>\
			<li>Style:<span class="recipe_style"> '+recipe.style+'</span></li>\
			<li>Type:<span class="recipe_style"> '+recipe.recipe_type+'</span></li>\
			<li>Tasting Notes:<span class="recipe_style"> '+recipe.tasting_notes+'</span></li>\
			<li>OG:<span class="recipe_style"> '+recipe.original_gravity+'</span></li>\
			<li>FG:<span class="recipe_style"> '+recipe.final_gravity+'</span></li>\
			<li>IBU:<span class="recipe_style"> '+recipe.ibu+'</span></li>\
			<li>ABV:<span class="recipe_style"> '+recipe.abv+'</span></li>\
			</ul>';
	return html
}