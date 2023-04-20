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
    let length = array.length;
    for (let i=0; i<length; i++) {
    let rand = Math.floor(Math.random()*array.length); //non usare random c'è rischio che ritorna lo stesso numero
    newArr.push(array[rand]);
    array.splice(rand,1);
    }
    return newArr;
}


let arrayMescolato = mescola(questions);
console.log(arrayMescolato);

function selezionaDomanda() {
  let domande = document.querySelector("#domande");     
  //Vado a passare la stringa della domanda
    domande.innerHTML += arrayMescolato[0].question;
  }
  
  //selezionaDomanda();
  let domandaCorrente = 0;
  let risposteSbagliate = [];
  let risposteGiusta;
  
function addButtons( nextReq) {
  
    let domande = document.querySelector("#domande");     
     //Vado a passare la stringa della domanda
    domande.innerHTML = nextReq.question;

    let quest=document.querySelector('.question')
    let container = document.querySelector('.risposte')
    
    //Inserisco la prima stringa corretta
    let nuovoA = [];
    nuovoA = nextReq.incorrect_answers;
    nuovoA.push(nextReq.correct_answer) 
    
    if(nextReq.type != 'boolean'){
      nuovoA = mescola(nuovoA)
    }

    //Inserisco le altre stringhe non corretta
    for (let i = 0; i < nuovoA.length; i++) {
          
          let button = document.createElement('button');
          button.innerHTML = nuovoA[i];
          button.classList.add('stringaRisposte');
          button.addEventListener("click", function(){
            container.innerHTML = '';
           
            if(nextReq.incorrect_answers.includes(button.innerHTML)){
              risposteSbagliate.push(nextReq);
            }
            
            if(domandaCorrente == arrayMescolato.length){
              //lancio la funzione che passa alla fase finale(risultati)
              console.log("Risposte sbagliate "+risposteSbagliate.length)
              risposteGiusta = 10 - risposteSbagliate.length;
              console.log("Risposte giuste "+ risposteGiusta)

              let div = document.querySelector('.grp2_PaginaBench');
              div.remove();
              //modifica
              //return risposteSbagliate.length
            
            }else{
              addButtons(arrayMescolato[domandaCorrente])
            }
          })
          container.append(button);   
        }
        // console.log(domandaCorrente, risposteSbagliate);
        domandaCorrente++;
        quest.innerHTML= "Question " + domandaCorrente + "/10";
        
      }
      
      
let element = document.querySelector('#distruggi1');
element.addEventListener("click", myFunction);
      
function myFunction(){
    let div = document.querySelector('.grp2_PaginaBenv');
    div.remove();
    addButtons(arrayMescolato[domandaCorrente]);
}




