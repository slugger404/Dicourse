var app = angular.module('discourse', [ 'ngSanitize' ]);
app.controller('discourse_rss', function($scope, $http) {

	$http.get("https://discourseofhumanevents.libsyn.com/rss").then(
			function(response) {
				//Convert to JSON
				var x2js = new X2JS();
				var xml = response.data;
				$scope.rssJson = x2js.xml_str2json(xml);
				var episodes = $scope.rssJson.rss.channel.item;
				$scope.episodes = episodes;
				
				//Iterate through and number the Episodes
				var episodeNumber = episodes.length;
				episodes.forEach(function(episode){
					episode.number = episodeNumber;
					episodeNumber--;
				})
			});

});