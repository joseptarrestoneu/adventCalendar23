window.addEventListener("load", () => {

    const data = [
        {
            titleDay: 1,
            dateDay: new Date(2023,11,1),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,2),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,3),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,4),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,5),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,6),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,7),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,8),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,9),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,10),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,11),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,12),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,13),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,14),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,15),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,16),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,17),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,18),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,19),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,20),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,21),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,22),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,23),
            questionDay: "",
            imgDay: "",
        },
        {
            titleDay: 1,
            dateDay: new Date(2023,11,24),
            questionDay: "",
            imgDay: "",
        },
    ]

    let links = document.querySelectorAll(".title_day")
    data.forEach((element, index) => {
        links[index].innerText = element.dateDay.toLocaleDateString()
    })

});