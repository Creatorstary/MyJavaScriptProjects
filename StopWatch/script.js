const timer = document.querySelector('.timer')
const startStop = document.getElementById('startstop')
const reset = document.getElementById('reset')

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadseconds = 0;
let leadminutes = 0;
let leadhours = 0;

let timerinterval = null;
let timerstatus = "stopped";


function stopwatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    if (seconds < 10) {
        leadseconds = "0" + seconds.toString()
    } else {
        leadseconds = seconds;
    }
    if (minutes < 10) {
        leadminutes = "0" + minutes.toString()
    } else {
        leadminutes = minutes;
    }
    if (hours < 10) {
        leadhours = "0" + hours.toString()
    } else {
        leadhours = hours;
    }

    let timechange = timer.innerText = leadhours + ":" + leadminutes + ":" + leadseconds;

}


startStop.addEventListener("click", function(){
    if (timerstatus == "stopped"){
        timerinterval = window.setInterval(stopwatch, 1000);
        document.getElementById('startstop').innerHTML = `<i class="fa-solid fa-pause"></i>`;
        timerstatus = "started"
    } else{
        window.clearInterval(timerinterval)
         document.getElementById('startstop').innerHTML = `<i class="fa-solid fa-play"></i>`;
         timerstatus = "stopped"
    }
})

reset.addEventListener('click', () => {
    window.clearInterval(timerinterval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerstatus = "stopped"

    timer.innerHTML = "00:00:00"
})