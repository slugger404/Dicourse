var app = angular.module('discourse', [ 'ngSanitize', 'ngRoute'])



var rssController = app.controller('discourse_rss', function($scope, $http, $location) {
	
	if ($scope.episodes == null) {
		$http.get("https://discourseofhumanevents.libsyn.com/rss").then(function(response) {
			setupHosts($scope);
			convertXmlRssToJson(response, $scope);
			applyEpisodeAdjustments($scope);
			addFavorites($scope);
			
			configurePage($scope);
		});
	} else {
		configurePage($scope);
	}
	
	
	function configurePage($scope){
		var config = PAGE_CONFIG[$location.path()];
		$scope.displayEpisodes = $scope[config['episodes']];
		document.title = config['title']==null?PAGE_TITLE: SHORT_PAGE_TITLE + TITLE_DIVIDER + config['title'];
	}

});