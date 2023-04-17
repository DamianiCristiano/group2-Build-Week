function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        
        seconds = parseInt(timer);
        
        display.textContent =  seconds;

        if (--timer < 0) {
            timer = duration;
        }
    },1000);
}
window.onload = function () {
    var timer = 10,//da cambiare..collegare una functione 
        display = document.querySelector('#time');
    startTimer(timer, display);
};



