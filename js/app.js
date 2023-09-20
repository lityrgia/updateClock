const clock = document.querySelector(".container")
const day = document.getElementById("day")
const time = document.getElementById("time")

function updateClock() {
    let date = new Date()

    switch (date.getDay().toString()) {
        case "0":
            day.innerHTML = "SUN"
            break;
        case "1":
            day.innerHTML = "MON"
            break;
        case "2":
            day.innerHTML = "TUE"
            break;
        case "3":
            day.innerHTML = "WED"
        case "4":
            day.innerHTML = "THU"
            break;
        case "5":
            day.innerHTML = "FRI"
            break;
        case "6":
            day.innerHTML = "SAT"
            break;
    }

    time.innerHTML = date.toLocaleString([], { hour: "numeric", minute: "numeric", second: "numeric", hour12: true })
}

updateClock()
setInterval(updateClock, 1000)
