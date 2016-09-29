var express = require('express');
var app = express();
var http = require('http').Server(app);
// var io = require('socket-io');


app.get('/', function(req, res) {
	res.status(200).send('hallå världen!');
});

//io.on('connection', function() {
//	return 'not implemented';
//});

http.listen(8080, function() {
	console.log('service started on port 8080, url: http://localhost:8080');
});