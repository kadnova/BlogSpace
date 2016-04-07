var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
//НАДО ПОДУМАТЬ ИЛИ НАЙТИ ПРО ПОСЛЕДНИЕ ПОСТЫ
var nav =	[		{Link: '/last-posts/Hush', Text: 'Hush'},
					{Link: '/DontSpeak', Text: 'DontSpeak'},
					{Link: '/WhenYouSpitYourVenom', Text: 'WhenYouSpitYourVenom'},
					{Link: '/KeepItShutIHateIt', Text: 'KeepItShutIHateIt'},
					{Link: '/WhenYouHissAndPreach', Text: 'WhenYouHissAndPreach'}
				];
var lastPostRouter = require('./src/routes/lastPostRoutes');

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/last-posts', lastPostRouter);

var lastPosts = [
		{	title: 'First Post',
		content: 'Etiam eget ligula at felis tempor finibus. Sed odio sapien, accumsan sed egestas quis, ultrices vel arcu. In sit amet egestas eros. Sed sodales euismod lorem eu sollicitudin. Ut commodo libero et mauris consequat malesuada. Cras sit amet dapibus augue. Ut quis vulputate magna, vel dictum sapien. Mauris nec lacus turpis.'
	}	,
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
lastPostRouter.route('/Hush') 
//В СКОБКАХ - ДИНАМИЧЕСКАЯ ССЫЛКА НА ПОСТ(??)
	.get(function (req,res) {
		res.send('Hello Single Post');
	});

app.use('/last-posts', lastPostRouter);

app.get('/',function(req, res){
	res.render('blog-template', {
		title: 'Goodbye Moonmen', 
		nav: [	{Link: '/Hush', Text: 'Hush'},
				{Link: '/DontSpeak', Text: 'DontSpeak'},
				{Link: '/WhenYouSpitYourVenom', Text: 'WhenYouSpitYourVenom'},
				{Link: '/KeepItShutIHateIt', Text: 'KeepItShutIHateIt'},
				{Link: '/WhenYouHissAndPreach', Text: 'WhenYouHissAndPreach'}
		],
	});
});

app.get('/books',function(req,res){
	res.send('hi books');
});

app.listen(port,function(err){
	console.log('running server on ' + port);
});
