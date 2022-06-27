var daysE = document.getElementById('day');
var hoursE = document.getElementById('hour');
var minE = document.getElementById('min');
var secondsE = document.getElementById('second');

const animalDay = "4 October 2022";

function countdown() {
    const animalDayDate = new Date(animalDay);
    const currentDate = new Date();

    const total = (animalDayDate - currentDate) / 1000;

    const days = Math.floor(total / 3600 / 24);
    const hours = Math.floor(total / 3600) % 24;
    const minutes = Math.floor(total / 60) % 60;
    const seconds = Math.floor(total) % 60;
 
    daysE.innerHTML = formatTime(days);    
    hoursE.innerHTML = formatTime(hours);    
    minE.innerHTML = formatTime(minutes);    
    secondsE.innerHTML = formatTime(seconds);    

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000)