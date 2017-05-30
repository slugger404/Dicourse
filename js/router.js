app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
	    enabled:true,
  		requireBase: false
	})
}]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "pages/main.html"
	}).when("/hosts", {
		templateUrl : "pages/hosts.html"
	});
    
  // $locationProvider.html5Mode(true);
}]);