app.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	})
	$locationProvider.html5Mode(true);
} ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "pages/hosts.html"
	}).when("/hosts", {
		templateUrl : "pages/hosts.html"
	});    
}]);