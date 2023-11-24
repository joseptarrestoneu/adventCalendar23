window.addEventListener("load", () => {

    const data = [
        {
            titleDay: 1,
            dateDay: new Date('12/01/2023 7:00 AM'),
            questionDay: "Quan ens vam conèixer?",
            response: [
                {
                    response: "El 31 de desembre de 2007",
                    result: true,
                },
                {
                    response: "Quan es va originar l'Univers, entre que ho va decidir Deu i el Big Bang",
                    result: false,
                },
                {
                    response: "Ens coneixem?",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/1.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/02/2023 7:00 AM'),
            questionDay: "Quina és la millor xocolata que hem provat mai?",
            response: [
                {
                    response: "Nestle",
                    result: true,
                },
                {
                    response: "Lindl",
                    result: false,
                },
                {
                    response: "?",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/2.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/03/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/3.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/04/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/4.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/05/2023 7:00 AM'),
            questionDay: "",response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/5.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/06/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/6.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/07/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/7.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/08/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/8.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/09/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/9.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/10/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/10.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/11/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/11.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/12/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/12.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/13/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/13.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/14/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/14.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/15/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/15.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/16/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/16.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/17/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/17.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/18/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/18.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/19/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/19.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/20/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/20.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/21/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/21.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/22/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/22.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/23/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/23.svg",
        },
        {
            titleDay: 1,
            dateDay: new Date('12/24/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                },
                {
                    response: "",
                    result: false,
                },
                {
                    response: "",
                    result: false,
                },
            ],
            imgDay: "././img/gallery/fulls/24.svg",
        },
    ]

    // Activar i desactivar els links dels 24 dies del calendari 
    let now = new Date()
    let links = document.querySelectorAll(".title_day")
    data.forEach((element, index) => {
        links[index].innerText = element.dateDay.toLocaleDateString()
        if (element.dateDay >= now ) {
            links[index].nextElementSibling.classList.add("active")
            links[index].parentElement.classList.add("desactive_link")
        }
    })

    // Activar la musica del calendari d'advent
    const playSound = function() {
        let element = document.createElement('div');
        element.setAttribute('style', 'display: none');
        element.innerHTML = `
            <audio autoplay loop>
                <source src="media/audio/burrito.mp3" type="audio/mpeg">
                No soportat pel navegador
            </audio>
        `;
        document.body.appendChild(element);
        document.removeEventListener('click', playSound);
    }
    document.addEventListener("click", playSound);

    // Annar cap a la preguntes del dia concret
    document.addEventListener("click", (event) => {
        console.log(event.target.parentNode.classList.contains("desactive_link"));
        
        if (event.target.parentNode.classList.contains("desactive_link")) {
            document.querySelector(".date").classList.remove("desactive")
            document.querySelector(".date").classList.add("activeDay")
            let date = document.querySelector(".date")
            document.querySelector(".calendarAdvent").classList.add("desactive")
            date.classList.add("activeDay")
            date.innerHTML = `<div class="petitGif"><iframe src="https://giphy.com/embed/L3Ujzf2eSd2Wlmh5lD" width="480" height="1000" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`
            setTimeout(() => {
                document.querySelector(".date").classList.remove("activeDay")
                document.querySelector(".date").classList.add("desactive")
                document.querySelector(".calendarAdvent").classList.remove("desactive")
            }, 5000)

        } else {
            let id = event.target.parentNode.getAttribute("id");
            document.querySelector(".date").classList.remove("desactive")
            document.querySelector(".date").classList.add("activeDay")
            
            let date = document.querySelector(".date")
            document.querySelector(".calendarAdvent").classList.add("desactive")
            date.classList.add("activeDay")
            date.innerHTML = `
            <img src="${data[id-1].imgDay}" alt="">
            <div class="first">
                <div class="question">${data[id-1].questionDay}</div>
            </div>
            <div class="second">
                <div class="question1 questions">
                    <p class="title_date">${data[id-1].response[0].response}</p>
                </div>
                <div href="" class="question2 questions">
                    <p class="title_date">${data[id-1].response[1].response}</p>
                </div>
                <div href="" class="question3 questions">
                    <p class="title_date">${data[id-1].response[2].response}</p>
                </div>
            </div>
            `
        }
    })

});