app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "pages/main.html"
	}).when("/hosts", {
		templateUrl : "pages/hosts.html"
	});    
}]);