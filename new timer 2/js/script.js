const semicircles = document.querySelectorAll('.semicircle')
const timer = document.querySelector('.timer')


const hr = 0
const min = 0
const sec = 10 //creare funzione per cambiare secondi

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const starTime = Date.now(); 
const futureTime = starTime + setTime

let timerLoop;




function countDownTimer(){
    clearInterval(timerLoop);
    timerLoop = setInterval(()=>{
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime / setTime) * 360;



    if(angle > 180) {
        semicircles[2].style.display = 'none';
        semicircles[0].style.transform = 'rotate(180deg)';
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    }
    
    else {
        semicircles[2].style.display = 'block';
        semicircles[0].style.transform = `rotate(${angle}deg)`;
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    }


    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((remainingTime / (1000 * 60) % 60));
    const secs = Math.floor((remainingTime / 1000) % 1000);

    timer.innerHTML = `
    <div>${secs}</div>
    `;
    
    if(remainingTime <= 0) {
        
        semicircles[0].style.display= 'none'
        semicircles[1].style.display= 'none'
        semicircles[2].style.display= 'none'
    }
}
}

// creare funzione con switch 
//  è esempio, butto un po di idee
/*function difficultyQuest(){
    switch (difficult){
        case "easy":
            sec = 30;
            break;
        case "medium":
            sec = 60;
            break;
        case "hard":
            sec = 120;
            break;
    }
}*/