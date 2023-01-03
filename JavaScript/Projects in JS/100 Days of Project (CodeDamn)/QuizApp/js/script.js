// // All Questions
const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

//  ____________Global Reference___________
//Container Reference
const strtContain = document.querySelector('.start');
const qstContain = document.querySelector('.questions');
const allDonContain = document.querySelector('.allDone');
const higScrContain = document.querySelector('.swhighScores');
//Header Reference
const showTime = document.querySelector('.timer');
//Start Page Reference
const startQuiz = document.querySelector('.start-btn');
//Question Page Reference
const heading = document.querySelector('.questHead');
const ans = document.querySelectorAll('.option');
const result = document.querySelector('.optResult');
//All Done Page Reference
const shwScore = document.querySelector('.score');
const subBtn = document.querySelector('.submit-btn');
//HighScores Page Reference
const scoreList= document.querySelector('.score-list li');
const backBtn =document.querySelector('.back-btn');



//Start Timer
let time = 0; 
let startTimer= ()=>{


let strIntl = setInterval(()=>{
      showTime.innerHTML = `Time: ${time}`;
        if(time<1){
        clearInterval(strIntl);
        allDonePage(score);
        }
        else time--;
   },1000);

}

  
//
let quesCount = 0;
let score = 0;
let user= {};
//Question Number Increment with Options
ans.forEach((getAns)=>{
    getAns.addEventListener('click',()=>{
      if(getAns.innerHTML === questions[questions.length-1].answer){
        score +=1;
        allDonePage(score);
      } else if(getAns.innerHTML === questions[quesCount].answer){
            result.innerHTML ="Correct!";
            quesCount++;
            startQuestion();
            score +=1;
      }
      else{
            result.innerHTML ="Incorrect!";
              console.log(time-=10);
        }
     
     })
 })


//Start Showing Question
let startQuestion =()=>{
  strtContain.classList.add('hide');
  qstContain.classList.remove('hide');

    //Otion Reference
    let option1 = document.querySelector('#option-1');
    let option2 = document.querySelector('#option-2');
    let option3 = document.querySelector('#option-3');
    let option4 = document.querySelector('#option-4');

        
         
       let questionNum = questions[quesCount];
        heading.innerHTML = questionNum.questionText;
     

        option1.innerHTML = questionNum.options[0];
        option2.innerHTML = questionNum.options[1];
        option3.innerHTML = questionNum.options[2];
        option4.innerHTML = questionNum.options[3];
   

}

// All Done Page
function allDonePage(score){
  allDonContain.classList.remove('hide');
  qstContain.classList.add('hide');
        // startTimer(0);
        shwScore.innerHTML = `Your final score is ${score}`;

}

//Enter Initials & SubBtn:
subBtn.addEventListener('click',()=>{
let getIntls = document.querySelector('.initials-box').value;
  // alert(getIntls);
  allDonContain.classList.add('hide');
  higScrContain.classList.remove('hide');

  highScore(getIntls);

})

//HighScore Page
const highScore=(getIntls)=>{
scoreList.innerHTML = getIntls;
}
//Backbtn
backBtn.addEventListener('click', ()=>{
  higScrContain.classList.add('hide');
  startQuestion();
});

//Start Quiz Button
startQuiz.addEventListener('click', ()=>{
  startTimer();
  startQuestion();
})
