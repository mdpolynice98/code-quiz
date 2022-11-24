const  quizData = [
    {
        question: "Which language runs in a web browser?",
        A: "Java",
        B: "C",
        C: "Python",
        D: "Javascript",
        Correct: "D",
    },
    {
        question: "What does CSS stand for?",
        A: "Central Style Sheets",
        B: "Cascading Style Sheets",
        C: "Cascading Simple Sheets",
        D: "Cars SUVs Sailboats",
        Correct: "B",
    },
    {
        question: "What HTML stand for?",
        A: "Hypertext Markup Language",
        B: "Hypertext Markdown Language",
        C: "Hyperloop Machine Language",
        D: "Helicopter Terminals Motorboats Lamborginis",
        Correct: "A",

    },
    {
        question: "What year was JavaScript launched?",
        A: "1996",
        B: "1995",
        C: "1994",
        D: "none of the above",
        correct: "B",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById ('A')
const b_text = document.getElementById ('B')
const c_text = document.getElementById ('C')
const d_text = document.getElementById ('D')
const viewBtn = document.getElementById ('View Highscores')
const startBtn = document.getElementById ('BEGIN')
const submitBtn = document.getElementById ('Submit')
const backBtn = document.getElementById ('Go Back')
const clearBtn = document.getElementById ('Clear Highscores')

let currentQuiz = 0
let score = 0

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizdata[currentQuiz]

    questionEL.innerText = currentQuizData.question
    a_text.innertText = currentQuizData.a
    b_text.innertText = currentQuizData.b
    c_text.innertText = currentQuizData.c
    d_text.innertText = currentQuizData.d 
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answerEls
    answerEls.forEach(answeEl => {
        if(answerEls.checked) {
            console.log(answeEl)
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score.answerEls
        }
    }
})