function CalcTime(time) {
    var input = parseInt(time);
    var min = Math.floor(input / 60);
    var hours = Math.floor(min / 60);
    var sec = input % 60;
    
    return hours + ' godzin, ' + (min - (hours * 60)) + ' minut i ' + sec + ' sekund';
}

exports.CalcTime = CalcTime;
