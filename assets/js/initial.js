window.addEventListener("load", () => {

    const dataInitial = {
        titleCalendar: "Calendari d'Advent 2023",
        descriptionCalendar: "A l’Alemanya protestant els nens encenien una espelma cada dia d’advent. Ester, aquest any el teu calendari d'advent serà una mica diferent. Podràs esperar? Moltes sorpreses t'esperen cada dia!!! Avui pots veure com serà el teu calendari. CLICA'M!!!!",
    }

    let end = new Date('12/01/2023 7:00 AM');

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    function showRemaining() {
        let now = new Date();
        let distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            let acive = document.querySelector('.clock')
            acive.classList.add("desactive")
            let noActive = document.querySelector('.button')
            noActive.classList.remove("desactive")
            noActive.classList.add("active")

            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

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