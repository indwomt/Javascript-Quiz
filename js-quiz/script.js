var startButtonEl = document.getElementById("startButton")
var questionBoxEl = document.getElementById("questionBox")
var answerButtonEl = document.getElementById("answerButtons")
var question = document.getElementById('question')
var shuffledQuestions

startButtonEl.addEventListener("click", startQuiz) 


function startQuiz() {
startButtonEl.classList.add('hidden');
questionBoxEl.classList.remove('hidden');
shuffledQuestions = questions[0].question
question.textContent = shuffledQuestions
}

const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]