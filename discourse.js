var app = angular.module('discourse', [ 'ngSanitize' ]);

var NUMBER_OF_EPISODES_IN_RECENT = 10;

app.controller('discourse_rss', function($scope, $http) {

	$http.get("https://discourseofhumanevents.libsyn.com/rss").then(
			function(response) {
				//Convert to JSON
				var x2js = new X2JS();
				var xml = response.data;
				$scope.rssJson = x2js.xml_str2json(xml);
				$scope.episodes = $scope.rssJson.rss.channel.item;
				$scope.recentEpisodes = [];
				
				//Iterate through and number the Episodes
				var episodeNumber = $scope.episodes.length;
				$scope.episodes.forEach(function(episode){
					episode.number = episodeNumber;
					if(episodeNumber>$scope.episodes.length-NUMBER_OF_EPISODES_IN_RECENT){
						$scope.recentEpisodes.push(episode);	
					}					
					episodeNumber--;
				})
			});

});