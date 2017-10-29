var os = require('os');
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

    console.log('System: ', type);
    console.log('Wersja: ', release);
    console.log('Procesor', cpu);
    console.log(timeModule.CalcTime());
    console.log('Nazwa użytkownika: ', user.username);
    console.log('Katalog domowy: ', user.homedir);
}

exports.print = getOSinfo;
exports.time = time;