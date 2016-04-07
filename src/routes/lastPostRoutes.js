var express = require('express');

var lastPostRouter = express.Router();

var lastPosts = [
		{	title: 'First Post',
		content: 'Etiam eget ligula at felis tempor finibus. Sed odio sapien, accumsan sed egestas quis, ultrices vel arcu. In sit amet egestas eros. Sed sodales euismod lorem eu sollicitudin. Ut commodo libero et mauris consequat malesuada. Cras sit amet dapibus augue. Ut quis vulputate magna, vel dictum sapien. Mauris nec lacus turpis.'
	},
		{	title: 'Second Post',
		content: 'Etiam eget ligula at felis tempor finibus. Sed odio sapien, accumsan sed egestas quis, ultrices vel arcu. In sit amet egestas eros. Sed sodales euismod lorem eu sollicitudin. Ut commodo libero et mauris consequat malesuada. Cras sit amet dapibus augue. Ut quis vulputate magna, vel dictum sapien. Mauris nec lacus turpis.'
	},
		{	title: 'Third Post',
		content: 'Etiam eget ligula at felis tempor finibus. Sed odio sapien, accumsan sed egestas quis, ultrices vel arcu. In sit amet egestas eros. Sed sodales euismod lorem eu sollicitudin. Ut commodo libero et mauris consequat malesuada. Cras sit amet dapibus augue. Ut quis vulputate magna, vel dictum sapien. Mauris nec lacus turpis.'
	},
		{	title: 'Fourth Post',
		content: 'Etiam eget ligula at felis tempor finibus. Sed odio sapien, accumsan sed egestas quis, ultrices vel arcu. In sit amet egestas eros. Sed sodales euismod lorem eu sollicitudin. Ut commodo libero et mauris consequat malesuada. Cras sit amet dapibus augue. Ut quis vulputate magna, vel dictum sapien. Mauris nec lacus turpis.'
	},
		{	title: 'Fivth Post',
		content: 'Etiam eget ligula at felis tempor finibus. Sed odio sapien, accumsan sed egestas quis, ultrices vel arcu. In sit amet egestas eros. Sed sodales euismod lorem eu sollicitudin. Ut commodo libero et mauris consequat malesuada. Cras sit amet dapibus augue. Ut quis vulputate magna, vel dictum sapien. Mauris nec lacus turpis.'
	}
];

lastPostRouter.route('/') 
	.get(function (req,res) {
		res.render('last-posts', {
		title: 'Last posts', 
		nav: [	{Link: '/Hush', Text: 'Hush'},
				{Link: '/DontSpeak', Text: 'DontSpeak'},
				{Link: '/WhenYouSpitYourVenom', Text: 'WhenYouSpitYourVenom'},
				{Link: '/KeepItShutIHateIt', Text: 'KeepItShutIHateIt'},
				{Link: '/WhenYouHissAndPreach', Text: 'WhenYouHissAndPreach'}
		],
		lastposts: lastPosts,
	});
});

//-----------------------------------ДОДЕЛАТЬ!
lastPostRouter.route('/:id') 
//В СКОБКАХ - ДИНАМИЧЕСКАЯ ССЫЛКА НА ПОСТ(??)
	.get(function (req,res) {
	var id = req.params.id;
	res.render('last-post', {
		title: 'Last posts', 
		nav: [	{Link: '/Hush', Text: 'Hush'},
				{Link: '/DontSpeak', Text: 'DontSpeak'},
				{Link: '/WhenYouSpitYourVenom', Text: 'WhenYouSpitYourVenom'},
				{Link: '/KeepItShutIHateIt', Text: 'KeepItShutIHateIt'},
				{Link: '/WhenYouHissAndPreach', Text: 'WhenYouHissAndPreach'}
		],
		lastpost: lastPosts[id],
	});
		res.send('Hello Single Post');
	});

module.exports = lastPostRouter;