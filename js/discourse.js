var app = angular.module('discourse', [ 'ngSanitize', 'ngRoute'])

var NUMBER_OF_EPISODES_IN_RECENT = 5;

var rssController = app.controller('discourse_rss', function($scope, $http, $location) {
	
	if ($scope.episodes == null) {
		$http.get("https://discourseofhumanevents.libsyn.com/rss").then(function(response) {
			setupHosts($scope);
			convertXmlRssToJson(response, $scope);
			applyEpisodeAdjustments($scope);
			
			$scope.displayEpisodes = $location.path() == '/all' ? $scope.episodes : $scope.recentEpisodes;
		});
	} else {
		$scope.displayEpisodes = $location.path() == '/all' ? $scope.episodes : $scope.recentEpisodes;
	}
	

});