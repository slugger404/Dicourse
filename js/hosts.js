function setupHosts($scope){
	$scope.hosts = {};
	var hostNames = ['Zach', 'Nick', 'Chloe', 'Cody', 'Kara', 'Harry', 'Cody']
	
	hostNames.forEach(function(name){
		var host = {}
		$scope.hosts[name] = host;
		host.name = name;
		host.episodes = [];
		host.desc = 'host_descriptions/' + name + '.html';
		host.pic = 'images/' + name + '.jpg';
	});
}