function buildQuiz() {
    var quizQuestion = document.createElement("h2");
    quizQuestion.id = "question"
    quizQuestion.innerText = questions[1].question;
    document.getElementById("quiz").appendChild(quizQuestion);
    document.getElementById("aa1").textContent(answerA);
    console.log("A: "+ answerA);
    
    for(var j=1; j < answersActive.split(",").length+1; j++) {
        var answer = document.createElement("P");
        answer.id = "a" + j;
        answer.classList.add("answer");
        var answerText = "";
        var answersString = JSON.stringify(questions[1].answers);
        answerText = answersString.split(",");
        console.log("j: " + answerText);
        answer.innerText = answersArr[j-1];


        document.getElementById("question").appendChild(answer);
    }
}


/*
btnWrongAnswer.addEventListener("click", function() {
    penalty = -10;
    penaltyMessage = "  -10 Seconds!"
    console.log("wrong answer");
})*/