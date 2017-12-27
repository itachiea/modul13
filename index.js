var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
	if (request.method === 'GET' && request.url === '/'){
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			response.end(data);
		});		
	} else {
		response.setHeader("Content-Type", "image/jpeg; charset=utf-8");
		fs.readFile('./404.jpg', function(err, data) {
			response.end(data);
		});
	}
});

server.listen(8080);