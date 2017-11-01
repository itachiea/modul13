var OSinfo = require('./OSinfo');
var fs = require('fs');
var colors = require('colors');

process.stdin.setEncoding('utf-8');

/*fs.readFile('./text.txt', 'utf8', function(err, data) {
	console.log('Dane przed zapisem!'.blue);
	console.log(data);
	fs.appendFile('./text.txt', '\njajko', function(err) {
		if (err) throw err;
		console.log('Zapisano');
		fs.readFile('./text.txt', 'utf-8', function(err, data) {
			console.log('Dane po zapisie'.blue);
			console.log(data);
		});
	});
});*/


fs.readdir('./', 'utf-8', function(err, files) {
	fs.writeFile('./text.txt', files, function(err) {
		if (err) throw err;
		console.log('Zapisano'.green);
	});
});

console.log(process.env.username);
//wyświetlony użytkownik, ponieważ w systemie windows nie wyświetlimy języka sytemu :)

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();

        switch(instruction) {
            case '':
                process.stderr.write('Instruction is empty. Please repeat');
                break;
            case  '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/getOSinfo':  
                OSinfo.print();
                break;
            default: 
                process.stderr.write('Wrong instruction!\n');
                break;
        }
        //process.stdout.write(input);
    }
   
});

