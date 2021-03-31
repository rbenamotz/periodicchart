const TOTAL_QUESTIONS = 10;
var currentQuestion = 0;
var correctAnswer = "";
var score = 0;

function playGame() {
    askQuestion();
}

function askQuestion() {
    var d = document.getElementById("divQuestionNumber");
    d.innerText = "Question number " + (currentQuestion + 1) + " / " + TOTAL_QUESTIONS;
    var i = Math.random() * TOTAL_ELEMENTS;
    i = Math.floor(i);
    var cElm = elements[i];
    askAtomicNumber(cElm);
}

function getRandomAtomicNumber(previousAnswers) {
    var b = true;
    var output = 0;
    while (b) {
        output = Math.ceil(Math.random() * TOTAL_ELEMENTS);
        b = false;
        for (var i = 0; i < previousAnswers.length; i++) {
            if (previousAnswers[i] == output) {
                b = true;
            }
        }
    }
    return output;
}

function askAtomicNumber(elm) {
    const q = "What is the atomic number of " + elm.name + "?";
    var d = document.getElementById("divQuestion");
    d.innerText = q;
    var answers = [];
    var correctChoice = Math.floor((Math.random() * 4));
    correctAnswer = elm.number;
    answers[correctChoice] = elm.number;
    for (var i = 0; i < 4; i++) {
        if (i != correctChoice) {
            answers[i] = getRandomAtomicNumber(answers);
        }
        var divName = "divAnswer" + i;
        var d0 = document.getElementById(divName);
        d0.innerText = answers[i];
        d0.answer = answers[i];
        d0.onclick = checkAnswer;
    }
}

function checkAnswer(e) {
    var d = e.srcElement;
    var chosenAnswer = d.answer;
    console.log(chosenAnswer, correctAnswer);
    d = document.getElementById("divScore");
    if (chosenAnswer === correctAnswer) {
        score = score + 10;
        alert("Correct");
    } else {
        alert("Wrong. The correct answer is " + correctAnswer);
    }
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
        currentQuestion = currentQuestion + 1;
        askQuestion();
        d.innerText = score;
    } else {
        gameOver();
    }
}

function gameOver() {
    var maxScore = TOTAL_QUESTIONS * 10;
    alert("Your final score is " + score + " / " + maxScore);
    document.location.href = "index.html";

}