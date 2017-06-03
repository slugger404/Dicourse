var app = angular.module('discourse', [ 'ngSanitize', 'ngRoute'])

var NUMBER_OF_EPISODES_IN_RECENT = 5;

var TOP_EPISODES = [43,11,51,52,25]

var rssController = app.controller('discourse_rss', function($scope, $http, $location) {
	
	if ($scope.episodes == null) {
		$http.get("https://discourseofhumanevents.libsyn.com/rss").then(function(response) {
			setupHosts($scope);
			convertXmlRssToJson(response, $scope);
			applyEpisodeAdjustments($scope);
			addFavorites($scope);
			
			episodeDisplay($scope);
		});
	} else {
		episodeDisplay($scope);
	}
	
	function episodeDisplay($scope){
		if($location.path() == '/all'){
			$scope.displayEpisodes = $scope.episodes;
		} else if($location.path() == '/top'){
			$scope.displayEpisodes = $scope.favoriteEpisodes;
		} else {
			$scope.displayEpisodes = $scope.recentEpisodes;
		}
	}

});