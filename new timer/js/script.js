let timer = document.getElementById('timer');

function startTimer(duration) {
    var timer = duration;
    setInterval(function () {
        
        seconds = parseInt(timer);
        
        document.getElementById('timer').innerHTML =  seconds;

        if (--timer < 0) {
            timer = duration;
        }
    },1000);
    
}

let timer2 = 10//da cambiare..collegare una functione 
    document.querySelector('#timer');
    startTimer(timer2);

document.querySelector('#circle_background').style.animation = timer2+"s"+ 'circletimer linear;'




