window.addEventListener("load", () => {


    var end = new Date('12/01/2023 7:00 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').innerHTML = days+' dies';
        if ( hours < 10 ) {
            document.getElementById('hours').innerHTML = '0'+hours+':';
        } else {
            document.getElementById('hours').innerHTML = hours+':';
        }
        if ( minutes < 10 ) {
            document.getElementById('minutes').innerHTML = '0'+minutes+':';
        } else {
            document.getElementById('minutes').innerHTML = minutes+':';
        }
        if ( seconds < 10 ) {
            document.getElementById('seconds').innerHTML = '0'+seconds;
        } else {
            document.getElementById('seconds').innerHTML = seconds;
        }
    }

    timer = setInterval(showRemaining, 1000);

});