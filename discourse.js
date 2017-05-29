var app = angular.module('discourse', [ 'ngSanitize' ]);

var NUMBER_OF_EPISODES_IN_RECENT = 5;

app.controller('discourse_rss', function($scope, $http) {

	$http.get("https://discourseofhumanevents.libsyn.com/rss").then(function(response) {

		convertXmlRssToJson(response, $scope);
		applyEpisodeAdjustments($scope);

	});

	function convertXmlRssToJson(response, $scope) {
		var x2js = new X2JS();
		var xml = response.data;
		$scope.rssJson = x2js.xml_str2json(xml);
		$scope.episodes = $scope.rssJson.rss.channel.item;
		$scope.recentEpisodes = [];
	}

	function applyEpisodeAdjustments($scope) {

		for (i = $scope.episodes.length - 1; i >= 0; i--) {
			
			//Most recent are at top of array
			index = $scope.episodes.length - i - 1;
			episode = $scope.episodes[index]
			
			applyEpisodeNumberAdjustment(episode);			 
			addRecentEpisodesAdjustment($scope, episode, i, $scope.episodes.length);
			stripBoilerPlate(episode);
			
		}

	}

	function addRecentEpisodesAdjustment($scope, episode, episodeNumber, numberOfEpisodes) {
		if ($scope.episodes.length - episodeNumber <= NUMBER_OF_EPISODES_IN_RECENT) {
			$scope.recentEpisodes.push(episode);
		}
	}

	function applyEpisodeNumberAdjustment(episode) {
		var titleSplit = episode.title.split('-');
		episode.number = titleSplit[0].replace('DHE #','').trim();
		episode.title = titleSplit[1].trim();
	}
	
	function stripBoilerPlate(episode){
		episode.description = episode.description.split("itunes.apple")[0];
		var n = episode.description.lastIndexOf('<p><a href');
		episode.description = episode.description.substring(0, n);
	}

});