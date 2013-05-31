// angular.module('App', [])
// 	.config(function ($compileProvider) {
// 		$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
// 	})
// 	.config(function($routeProvider){
// 		$routeProvider
// 	      .when('/recipes', {templateUrl: 'partials/recipe-list.html',   controller: RecipeListCtrl})
// 				.when('/recipes/:recipeId', {templateUrl: 'partials/recipe-detail.html', controller: RecipeDetailCtrl});
// 				.otherwise({ redirectTo: '/recipes' })
// 	});

	var app = {
	    // Application Constructor
	    initialize: function() {
	        this.bindEvents();
	    },
	    // Bind Event Listeners
	    //
	    // Bind any events that are required on startup. Common events are:
	    // 'load', 'deviceready', 'offline', and 'online'.
	    bindEvents: function() {
	        document.addEventListener('deviceready', this.onDeviceReady, true);
	    },
	    // deviceready Event Handler
	    //
	    // The scope of 'this' is the event. In order to call the 'receivedEvent'
	    // function, we must explicity call 'app.receivedEvent(...);'
	    onDeviceReady: function() {
	        angular.element(document).ready(function() {
	            angular.bootstrap(document);
	        });
	    },
	};