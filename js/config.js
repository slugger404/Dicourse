var NUMBER_OF_EPISODES_IN_RECENT = 5;

var TOP_EPISODES = [43,11,51,52,25]

var PAGE_TITLE = 'Discourse of Human Events';
var SHORT_PAGE_TITLE = 'DHE';

var TITLE_DIVIDER = " : ";

var PAGE_CONFIG = {
		
	"/" : {
		'episodes': 'recentEpisodes',
		'title': null
	},
	"/all" : {
		'episodes': 'episodes',
		'title' : 'All Episodes'
	},
	"/top" : {
		'episodes': 'favoriteEpisodes',
		'title': 'Top Episodes' 
	},
	"/hosts" : {
		'episodes': null,
		'title' : 'Hosts'
	},
	"/about" : {
		'episodes' : null,
		'title' : 'About'
	},
}