var app = angular.module('discourse', [ 'ngSanitize', 'ngRoute'])

var NUMBER_OF_EPISODES_IN_RECENT = 5;

app.controller('discourse_rss', function($scope, $http) {

	$http.get("https://discourseofhumanevents.libsyn.com/rss").then(function(response) {

		convertXmlRssToJson(response, $scope);
		applyEpisodeAdjustments($scope);

	});

	

});