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
let remainingTime;

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];



function mescola(array) {
  let newArr = [];
  array = [...array];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * array.length); //non usare random c'è rischio che ritorna lo stesso numero
    newArr.push(array[rand]);
    array.splice(rand, 1);
  }
  return newArr;
}


let arrayMescolato = mescola(questions);
console.log(arrayMescolato);

/*function selezionaDomanda() {
  let domande = document.querySelector("#domande");     
  //Vado a passare la stringa della domanda
    domande.innerHTML += arrayMescolato[0].question;
  }*/

//selezionaDomanda();
let domandaCorrente = 0;
let risposteSbagliate = [];
let risposteGiusta = 0;

function addButtons(nextReq) {
  
  //countDownTimer();
  //Collego id domande con la variabile domande e vado a passare la stringa della domanda
  let domande = document.querySelector("#domande");
  domande.innerHTML = nextReq.question;
  
  let quest = document.querySelector('.question')
  let container = document.querySelector('.risposte')
  container.innerHTML = '';
  

  //Inserisco la prima stringa corretta
  let nuovoA = [];
  nuovoA = [...nextReq.incorrect_answers];
  nuovoA.push(nextReq.correct_answer)

  if(nextReq.type != 'boolean') {
    nuovoA = mescola(nuovoA)
  }

  //Inserisco le altre stringhe non corretta
  for (let i = 0; i < nuovoA.length; i++) {

    let button = document.createElement('button');
    button.innerHTML = nuovoA[i];
    button.classList.add('stringaRisposte');
    button.addEventListener("click", function () {


      if (nextReq.incorrect_answers.includes(button.innerHTML)) {
        risposteSbagliate.push(nextReq);
      }
      console.log(risposteSbagliate);

      if (domandaCorrente == arrayMescolato.length) {
        //lancio la funzione che passa alla fase finale(risultati)
        console.log("Risposte sbagliate " + risposteSbagliate.length)
        risposteGiusta = 10 - risposteSbagliate.length;
        console.log("Risposte giuste " + risposteGiusta)
        


        let div = document.querySelector('.grp2_PaginaBench');
        div.remove();
        let paginaResult = document.querySelector('.grp2_PaginaResult')
        paginaResult.style.display = 'block'

        //Parte Correct terza pagina
        let perCor = document.querySelector('.percCorrette');
        perCor.innerHTML += risposteGiusta*10 + '%';
        let risCor = document.querySelector('.risCorrette');
        risCor.innerHTML = risposteGiusta + ' / 10 Questions';

        //Parte Wrong terza pagina
        let perSb = document.querySelector('.percSbagliate');
        perSb.innerHTML += risposteSbagliate.length * 10 +'%';
        let risSb = document.querySelector('.risSbagliate');
        risSb.innerHTML = risposteSbagliate.length + ' / 10 Questions';
        
        
        const ctx = document.querySelector('#customCanvasBackgroundColor');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              label: '',
              data: [risposteGiusta, risposteSbagliate.length],
              borderWidth: 0.5
            }]
          },
        });
        
      } else {
        addButtons(arrayMescolato[domandaCorrente])
      }
    })
    container.append(button);
  }
  // console.log(domandaCorrente, risposteSbagliate);
  domandaCorrente++;
  quest.innerHTML = "Question " + domandaCorrente + "/10";
}


let element = document.querySelector('#distruggi1');
element.addEventListener("click", myFunction);

function myFunction() {
  let div = document.querySelector('.grp2_PaginaBenv');
  div.remove();
  let paginaBench = document.querySelector('.grp2_PaginaBench')
  paginaBench.style.display = 'block';
  countDownTimer();

  addButtons(arrayMescolato[domandaCorrente]);
}

let element2 = document.querySelector('#distruggi2');
element2.addEventListener("click", rateUs);


function rateUs() {
  let paginaResult = document.querySelector('.grp2_PaginaResult');
  paginaResult.remove();

  let paginaFeed = document.querySelector('.grp2_paginaFeedback');
  paginaFeed.style.display = 'block';
}


let buttonInfo = document.querySelector('.b-more-info')
buttonInfo.addEventListener("click", moreInfo);
function moreInfo(){
  let moreInfo = document.querySelector('.more-info')
  if (moreInfo.value == '') {
    alert('inserisci commento')
  }
  
  else if (moreInfo.value != ''){
    alert('valutazione inviata!')
  }
}







function countDownTimer(){
  let remainingTime = sec;
  if(timerLoop){
    clearInterval(timerLoop);
  }
    timerLoop = setInterval(()=>{

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
      <div>${remainingTime}</div>
      `;
      
      if(remainingTime <= 0) {
        remainingTime = sec;
        addButtons(arrayMescolato[domandaCorrente]);
        semicircles[0].style.display= 'none'
        semicircles[1].style.display= 'none'
        semicircles[2].style.display= 'none'
      }else{
        remainingTime--;
      }
},1000)
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
