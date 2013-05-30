function RecipesCtrl($scope, $http) {
	
	$http.get("http://thebrewersbarrel.com/recipes.json").success(function(data) {
		$scope.recipes = data;
	});

}
