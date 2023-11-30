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
                    return: "Aquí va començar tot! NOOO!! Va ser l'any anterior, però no he trobat fotos d'aquell anY!! Snif Snif. T'he compartit més fotos en el teu email. Però després de 15 anys no ja no puc imaginar-me la vida sense tu. I no em contestis 'Hola'!",
                    typeFile: "image",
                    imgResponse: "././img/gallery/thumbs/dia1.jpg", 
                },
                {
                    response: "Quan es va originar l'Univers, entre que ho va decidir Deu i el Big Bang",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: [],
                },
                {
                    response: "Ens coneixem?",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/1.svg",
        },
        {
            titleDay: 2,
            dateDay: new Date('12/02/2023 7:00 AM'),
            questionDay: "Quina és la millor xocolata que hem provat mai?",
            response: [
                {
                    response: "Nestle",
                    result: true,
                    return: "Ummmm! Quins records! Llàstima que es va pujar de preu!!! Però si busques per casa trobaràs un regalet. On has de buscar? No el trobaras on guardem la xocolata. Massa fàcil! Hauràs de buscar on fem les pizzes!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "Lindl",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "Simón Coll",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/2.svg",
        },
        {
            titleDay: 3,
            dateDay: new Date('11/03/2023 7:00 AM'),
            questionDay: "Ja s'acosta Nadal! Però durant els anys has conegut molta gent, però poques t'han marcat. Quina creus que és una de les més pesades?",
            response: [
                {
                    response: "La pesada de la Maria!!!",
                    result: true,
                    return: "Correcte!!!! Mira què et vol dir!",
                    typeFile: "video",
                    imgResponse: "././media/video/maria.mp4",
                },
                {
                    response: "En Tomàs que viu a sota nostra.",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "La 'falsa' metgesa que vivia al nostra carrer!",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/3.svg",
        },
        {
            titleDay: 4,
            dateDay: new Date('11/04/2023 7:00 AM'),
            questionDay: "Ummm! Quans records hem fet els dos!! Hem anat per aquí, per allà, viatjant pel món... Quina ha estat un dels primers viatges a fora d'Espanya que vam fer?",
            response: [
                {
                    response: "Roma, una de les millors ciutats i amb el millor menjar!!",
                    result: true,
                    return: "Quins recors: tirites, escalada per baranes dins d'una escala, veure la Fontana com la netegen,... Mira les fotos aquí: https://tuit.cat/Dl1s5",
                    typeFile: "image",
                    imgResponse: "././img/gallery/thumbs/dia4.jpg",
                },
                {
                    response: "Paris, la ciutat de l'amor!!",
                    result: false,
                    return: "No, no, no!!!! També hi hem anat però no va ser la primera!!",
                    imgResponse: "",
                },
                {
                    response: "Londres",
                    result: false,
                    return: "No, no, no!!!!",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/4.svg",
        },
        {
            titleDay: 5,
            dateDay: new Date('12/05/2023 7:00 AM'),
            questionDay: "Ja se que t'agrada molt anar al Teatre. Quina és l'obra de teatre que tenim pendent? El regal el trobaràs a dins el llibre d'aquesta obra!!",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    typeFile: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/5.svg",
        },
        {
            titleDay: 6,
            dateDay: new Date('12/06/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/6.svg",
        },
        {
            titleDay: 7,
            dateDay: new Date('12/07/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/7.svg",
        },
        {
            titleDay: 8,
            dateDay: new Date('12/08/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/8.svg",
        },
        {
            titleDay: 9,
            dateDay: new Date('12/09/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/9.svg",
        },
        {
            titleDay: 10,
            dateDay: new Date('12/10/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/10.svg",
        },
        {
            titleDay: 11,
            dateDay: new Date('12/11/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/11.svg",
        },
        {
            titleDay: 12,
            dateDay: new Date('12/12/2023 7:00 AM'),
            questionDay: "Com som una parella molt coneguda i internacional i tenim molta cultura mundial el regal d'avui te a veure amb el primer president negre dels Estats Units",
            response: [
                {
                    response: "Barack Obama",
                    result: true,
                    return: "Correcte!!!! Mira què et vol dir tota la seva familia!",
                    typeFile: "video",
                    imgResponse: "././media/video/faja.mp4"
                },
                {
                    response: "Jordi Pujol",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "Bladimir Putin",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/12.svg",
        },
        {
            titleDay: 13,
            dateDay: new Date('12/13/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/13.svg",
        },
        {
            titleDay: 14,
            dateDay: new Date('12/14/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/14.svg",
        },
        {
            titleDay: 15,
            dateDay: new Date('12/15/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/15.svg",
        },
        {
            titleDay: 16,
            dateDay: new Date('12/16/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/16.svg",
        },
        {
            titleDay: 17,
            dateDay: new Date('12/17/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/17.svg",
        },
        {
            titleDay: 18,
            dateDay: new Date('12/18/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/18.svg",
        },
        {
            titleDay: 19,
            dateDay: new Date('12/19/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/19.svg",
        },
        {
            titleDay: 20,
            dateDay: new Date('12/20/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/20.svg",
        },
        {
            titleDay: 21,
            dateDay: new Date('12/21/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/21.svg",
        },
        {
            titleDay: 22,
            dateDay: new Date('12/22/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/22.svg",
        },
        {
            titleDay: 23,
            dateDay: new Date('12/23/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
            ],
            imgDay: "././img/gallery/fulls/23.svg",
        },
        {
            titleDay: 24,
            dateDay: new Date('12/24/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
                },
                {
                    response: "",
                    result: false,
                    return: "No, no, no!!!!",
                    typeFile: "",
                    imgResponse: "",
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
            links[index].parentElement.classList.remove("active_link")
            links[index].parentElement.classList.add("desactive_link")
        }
    })

    // Activar la musica del calendari d'advent
    // const playSound = function() {
    //     let element = document.createElement('div');
    //     element.setAttribute('style', 'display: none');
    //     element.innerHTML = `
    //         <audio autoplay loop>
    //             <source src="media/audio/burrito.mp3" type="audio/mpeg">
    //             No soportat pel navegador
    //         </audio>
    //     `;
    //     document.body.appendChild(element);
    //     document.removeEventListener('click', playSound);
    // }
    // document.addEventListener("click", playSound);

    // Annar cap a la preguntes del dia concret
    document.addEventListener("click", (event) => {
        if (event.target.parentNode.classList.contains("desactive_link")) {
            document.querySelector(".date").classList.remove("desactive")
            document.querySelector(".date").classList.add("activeDay")
            let date = document.querySelector(".date")
            document.querySelector(".calendarAdvent").classList.add("desactive")
            date.classList.add("activeDay")
            date.innerHTML = `<div class="petitGif"><iframe src="https://giphy.com/embed/arsLaz8GLHzf7CVoln" width="258" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`
            setTimeout(() => {
                document.querySelector(".date").classList.remove("activeDay")
                document.querySelector(".date").classList.add("desactive")
                document.querySelector(".calendarAdvent").classList.remove("desactive")
            }, 5000)

        } else if (event.target.parentNode.classList.contains("active_link")) {
            let id = event.target.parentNode.getAttribute("id");
            document.querySelector(".date").classList.remove("desactive")
            document.querySelector(".date").classList.add("activeDay") 
            let date = document.querySelector(".date")
            document.querySelector(".calendarAdvent").classList.add("desactive")
            date.classList.add("activeDay")
            date.innerHTML = `
            <img class="image_record" src="${data[id-1].imgDay}" alt="">
            <div class="first">
                <div class="question">${data[id-1].questionDay}</div>
            </div>
            <div class="second" id="${id}">
                <div class="question1 questions 1 ${data[id-1].response[0].result}">
                    <p class="title_date">${data[id-1].response[0].response}</p>
                </div>
                <div class="question2 questions 2 ${data[id-1].response[1].result}">
                    <p class="title_date">${data[id-1].response[1].response}</p>
                </div>
                <div class="question3 questions 3 ${data[id-1].response[2].result}">
                    <p class="title_date">${data[id-1].response[2].response}</p>
                </div>
            </div>
            `
        } 
        // Pantalla preguntes concretes 
        else if (event.target.parentNode.parentNode.classList.contains("second")) {
            let id = event.target.parentNode.parentNode.id
            if (event.target.parentNode.classList.contains("true")) {
                document.querySelector(".date").classList.remove("activeDay")
                document.querySelector(".date").classList.add("desactive")
                let response = document.querySelector(".response")
                response.classList.add("activeDay")
                response.classList.remove("desactive")
                if (data[id-1].response[0].typeFile === "video") {
                    response.innerHTML = `
                    <div class="response_div">
                        <video src="${data[id-1].response[0].imgResponse}" autoplay poster="posterimage.jpg">
                            Tu navegador no admite el elemento <code>video</code>.
                        </video>
                        <div class="target_div ${data[id-1].response[0].result}">
                            <p class="title_date">${data[id-1].response[0].return}</p>
                        </div>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                    </div>
                    `
                } else if (data[id-1].response[0].typeFile === "image") {
                    response.innerHTML = `
                    <div class="response_div">
                        <img src="${data[id-1].response[0].imgResponse}" alt="">
                        <div class="target_div ${data[id-1].response[0].result}">
                            <p class="title_date">${data[id-1].response[0].return}</p>
                        </div>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                    </div>
                    `
                }
            } else {
                if (event.target.parentNode.classList.contains("1")) {
                    document.querySelector(".date").classList.remove("activeDay")
                    document.querySelector(".date").classList.add("desactive")
                    let response = document.querySelector(".response")
                    response.classList.add("activeDay")
                    response.classList.remove("desactive")
                    response.innerHTML = `
                    <div class="response_div">
                        <iframe src="https://giphy.com/embed/eKrgVyZ7zLvJrgZNZn" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        <div class="target_div ${data[id-1].response[0].result}">
                            <p class="title_date">${data[id-1].response[0].return}</p>
                        </div>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                    </div>
                    `
                } else if (event.target.parentNode.classList.contains("2")) {
                    document.querySelector(".date").classList.remove("activeDay")
                    document.querySelector(".date").classList.add("desactive")
                    let response = document.querySelector(".response")
                    response.classList.add("activeDay")
                    response.classList.remove("desactive")
                    response.innerHTML = `
                    <div class="response_div">
                        <iframe src="https://giphy.com/embed/eKrgVyZ7zLvJrgZNZn" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        <div class="target_div ${data[id-1].response[1].result}">
                            <p class="title_date">${data[id-1].response[1].return}</p>
                        </div>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                    </div>
                    `
                } else if (event.target.parentNode.classList.contains("3")) {
                    document.querySelector(".date").classList.remove("activeDay")
                    document.querySelector(".date").classList.add("desactive")
                    let response = document.querySelector(".response")
                    response.classList.add("activeDay")
                    response.classList.remove("desactive")
                    response.innerHTML = `
                    <div class="response_div">
                        <iframe src="https://giphy.com/embed/eKrgVyZ7zLvJrgZNZn" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        <div class="target_div ${data[id-1].response[2].result}">
                            <p class="title_date">${data[id-1].response[2].return}</p>
                        </div>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                    </div>
                    `
                }
            }
        }
        // Pantalla preguntes concretes
        if (event.target.classList.contains("fa-circle-arrow-right")) {
            document.querySelector(".date").classList.add("activeDay")
            document.querySelector(".date").classList.remove("desactive")
            document.querySelector(".response").classList.remove("activeDay")
            document.querySelector(".response").classList.add("desactive")
        }
                
    })

});