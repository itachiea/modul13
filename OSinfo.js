var os = require('os');
var colors = require('colors')
var timeModule = require('./TimeModule');

function getOSinfo() {
    var type = os.type(),
    release = os.release(),
    cpu = os.cpus()[0].model,
    user = os.userInfo();

    switch(type) {
        case 'Windows_NT':
            type = 'Windows';
            break;
        case 'Darwin':
            type = 'OSX';
            break;
        default:
            type = 'Brak informacji o systemie >.<';
    }

    console.log('System: '.cyan, type);
    console.log('Wersja: '.green, release);
    console.log('Procesor'.magenta, cpu);
    console.log('Czas włączenia: '.yellow,timeModule.CalcTime(os.uptime()));
    console.log('Nazwa użytkownika: '.white, user.username);
    console.log('Katalog domowy: '.grey, user.homedir);
}

exports.print = getOSinfo;