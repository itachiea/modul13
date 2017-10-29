var OSinfo = require('./OSinfo');

var x = "";

function CalcTime() {
    var input = parseInt(OSinfo.time);
    var min = Math.floor(input / 60);
    var hours = Math.floor(min / 60);
    var sec = input % 60;
    x = hours + ' godzin, ' + (min - (hours * 60)) + ' minut i ' + sec + ' sekund';
    //console.log(hours + ' godzin, ' + (min - (hours * 60)) + ' minut i ' + sec + ' sekund');
    //console log wywalał niezdefiniowaną zmienną w programiw głównym >.<
    return x;
}
CalcTime();
exports.CalcTime = CalcTime;
