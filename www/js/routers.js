angular.module('App', [])
.config(function ($compileProvider){
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
.config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        controller: RecipeListCtrl,
        templateUrl: 'partials/recipes-list.html'
    })
    .when('/recipes/:recipe_id', {
        controller: RecipeDetailCtrl,
        templateUrl: 'partials/recipes-detail.html'
    })
		.when('/sign_in', {
			controller: SessionsNewCtrl,
			templateUrl: 'partials/sign_in.html'
		})
		.otherwise({ redirectTo: '/' });
});
