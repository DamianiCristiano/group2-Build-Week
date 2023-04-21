let timer = document.getElementById('timer');

function startTimer(duration) {
    var timer = duration;
    setInterval(function () {
        
        seconds = parseInt(timer);
        
        document.getElementById('timer').innerHTML = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    },1000);
    console.log(timer);
}

let timer2 = 2//da cambiare..collegare una functione 
        display = document.querySelector('#timer');
    startTimer(timer2);




