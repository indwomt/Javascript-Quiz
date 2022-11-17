var startButtonEl = document.getElementById("startButton")
var questionBoxEl = document.getElementById("questionBox")
var answerButtonEl = document.getElementById("answerButtons")
var questionElement = document.getElementById('question')
var nextButton = document.getElementById('nextButton')
var timer = document.getElementById('timer')
var shuffledQuestions
var currentQuestionIndex
var secondsLeft = 10

startButtonEl.addEventListener("click", startQuiz) 


// starting the quiz and Populating the question box

function startQuiz() {
startButtonEl.classList.add('hidden');
questionBoxEl.classList.remove('hidden');
nextButton.classList.remove('hidden');
timer.classList.remove('hidden')
startTimer()
// setNextQuestion()
}


// Timer in navbar

function startTimer () {
  var timeInterval = setInterval(function() {
    secondsLeft-- 
  timer.textContent = secondsLeft
  
  if(secondsLeft === 0) {
    clearInterval(timeInterval);
    timer.textContent = "Time's up!"
  }
}, 1000)
}
















