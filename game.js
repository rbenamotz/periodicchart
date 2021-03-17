const TOTAL_QUESTIONS = 10;
function playGame() {
    for (var i=0; i<TOTAL_QUESTIONS; i++) {
        askQuestion(i+1);
    }
}

function askQuestion(num) {
    var i = Math.random() * TOTAL_ELEMENTS;
    i = Math.floor(i);
    var elm = elements[i];
    var h2 = document.getElementById("questionNumber");
    h2.innerText = "Question " + num + " / 10";
    askAtomicNumber(elm);
}

function askAtomicNumber(elm) {
    // const h2 = document.getElementById("elementName");
    const q = "What is the atomic number of " + elm.name + "?";
    var a = prompt(q);
        
}

