function RecipeListCtrl($scope, $http) {
	
	$http.get("http://thebrewersbarrel.com/recipes.json").success(function(data) {
		$scope.recipes = data;
	});

}

function RecipeDetailCtrl($scope, $http, $routeParams) {
			
	var recipe_id = $routeParams.recipe_id;
	
	$http.get("http://thebrewersbarrel.com/recipes/" + recipe_id + ".json").success(function(data) {
		$scope.recipe = data;
	});

}

function SessionsNewCtrl($scope){
	$scope.greeting = "Welcome to BB!";
}
