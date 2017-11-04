var fs = require('fs');

var http = require('http');
var server = http.createServer();
var indexHTML = "";
var image;


fs.readFile('./index.html', 'utf-8', function(err, data) {
	indexHTML = data;
});
fs.readFile('./404.jpg', function(err, data) {
	image = data;
})

server.on('request', function(request, response) {
	if (request.method === 'GET' && request.url === '/'){
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		response.end(indexHTML);
	} else {
		response.setHeader("Content-Type", "image/jpeg; charset=utf-8");
		response.end(image);
	}
});


server.listen(8080);


