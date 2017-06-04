app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "pages/main.html",
		controller: 'discourse_rss'
	}).when("/hosts", {
		templateUrl : "pages/hosts.html",
		controller: 'discourse_rss'
	}).when("/all", {
		templateUrl : "pages/main.html",
		controller: 'discourse_rss'
	}).when("/top", {
		templateUrl : "pages/main.html",
		controller: 'discourse_rss'
	});
}]);