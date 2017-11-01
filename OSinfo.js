var os = require('os');
var colors = require('colors');
var timeModule = require('./TimeModule');

time = os.uptime;
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

    console.log('System: '.grey, type);
    console.log('Wersja: '.red, release);
    console.log('Procesor'.magenta, cpu);
    console.log('Czas włączenia: '.green + timeModule.CalcTime());
    console.log('Nazwa użytkownika: '.yellow, user.username);
    console.log('Katalog domowy: ', user.homedir);
}

exports.print = getOSinfo;
exports.time = time;