var startButtonEl = document.getElementById("startButton")
var questionBoxEl = document.getElementById("questionBox")
// console.log('JS connected')

startButtonEl.addEventListener("click", startQuiz) 

function startQuiz() {
startButtonEl.classList.add('hidden');
questionBoxEl.classList.remove('hidden')
}

function nextQuestion() {

}

function answerChoice () {

}

const questions = [
   {
    question: "What is the color of the sky?",
    answers: [
        {text: 'blue', correct: true},
        {text: 'red', correct: false},
        {text: 'green', correct: false},
        {text: 'pruple', correct: false},
    ]
   },
   
   {
    question: "what is 2+2",
    answers: [
        {text: 4, correct: true},
        {text: 5, correct: false},
        {text: 6, correct: false},
        {text: 7, correct: false}
    ]
   }
]