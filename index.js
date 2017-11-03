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
	if (request.method === 'GET' && request.url === '/s'){
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		response.end(indexHTML);
	} else {
		response.setHeader("Content-Type", "image/jpeg; charset=utf-8");
		response.end(image);
	}
});

/*fs.readFile('./index.html', 'utf-8', function(err, http) {
	if(err) throw err;
		server.on('request', function(request, response) {
		response.setHeader("Content-Type", "text/html; charset=utf-8");
			if (request.method === 'GET' && request.url === '/s') {
				response.write(http);
				response.end();
			} else {
				fs.readFile('./404.html', 'utf-8', function(err, http) {
					response.statusCode = 404;
					response.write(http);
					response.end();
				});
		}
	});
});*/


server.listen(8080);


