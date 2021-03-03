
// Define the array of questions and answers //
var questions = [
    {
        question: "What is the best kind of developer?",
        answers: {
            a: "Front End Web Developer",
            b: "Back End Web Developer",
            c: "Full Stack Developer",
            d: "Fortran Developer"
        },
        correctAnswer: "3"
    },
    {
        question: "What U.S. based university has the best coding bootcamp?",
        answers: {
            a: "Harvard",
            b: "Yale",
            c: "Devry",
            d: "Washington University"
        },
        correctAnswer: "4"
    },
    {
        question: "What language below is the most cutting edge?",
        answers: {
            a: "Python",
            b: "Pascal",
            c: "Fortan",
            d: "Pick Basic"
        },
        correctAnswer: "1"
    },
    {
        question: "Which of the following is not a typical building block of a web page?",
        answers: {
            a: "Xanthum Gum",
            b: "HTML",
            c: "CSS",
            d: "Java Script"
        },
        correctAnswer: "1"
    }
]

// set or initialize global variables //
const timerText = document.getElementById("timerText");
var quiz = document.getElementById("quiz");
const btnStartQuiz = document.getElementById("btnStartQuiz");
const btnWrongAnswer = document.getElementById("btnWrongAnswer");
let initialsScreen = document.getElementById("initialsPrompt");
let submit = document.getElementById("submit");
let intervalID;
let secondsLeft = 61;
var penalty = 0;
var penaltyMessage = "";
var answerCorrect = false;
var qIndexArr, currentQuestionIndex;
var yourScore = "";
 
// set "questionIndexes" array of questions numbers from 1 to questions.length and then .shuffle it

var qIndexArr = [];
var i = 1;
while(i < questions.length+1) {
    qIndexArr.push(i++);
}
qIndexArr = qIndexArr.sort(() => Math.random() - 0.5);
console.log("qIndex:" + qIndexArr);

// WHEN START BUTTON IS CLICKED
btnStartQuiz.addEventListener("click", function () {
    document.getElementById("preQuiz").style.display="none";
    quiz.classList.remove("hide");
    currentQuestionIndex = 0;
    console.log(qIndexArr);
    buildQuiz(currentQuestionIndex);
    intervalID = setInterval(function() {
        secondsLeft -= 1;
        if(secondsLeft === 0) {
            clearInterval(intervalID);
            var infoText = document.getElementById("info");
            infoText.textContent = "Time is up!";
            infoText.classList.remove("hide");
        }
        timerText.textContent = "Remaining time: " + secondsLeft;
    }, 1000);
})

function buildQuiz(qnum) {
    console.log(qnum);
    document.getElementById("qq").innerText = questions[qnum].question;
    document.getElementById("aa1").innerText = questions[qnum].answers.a;
    document.getElementById("aa2").innerText = questions[qnum].answers.b;
    document.getElementById("aa3").innerText = questions[qnum].answers.c;
    document.getElementById("aa4").innerText = questions[qnum].answers.d;
}

//SAVE SCORE TO LOCAL STORAGE
function saveScore(event) {
    event.preventDefault();
    console.log("YourScore after submit:" + yourScore);
    var yourInitials = document.querySelector("#initials").value;
    console.log(yourInitials);
    var currentScoresRaw = localStorage.getItem("highScore");
    var currentScores = []
    if(!!currentScoresRaw) {
        currentScores = JSON.parse(currentScoresRaw);
    } 
    currentScores.push({initials: yourInitials, score: yourScore});
    localStorage.setItem("highScore", JSON.stringify(currentScores));
    location.href = "leaderboard.html";
}

// DISPLAY MOMENTARY USER FEEDBACK BASED ON ANSWER
function showInfo(type) {
    var infoText = document.getElementById("info");
    if(type ==="correct"){
        infoText.textContent = "Correct!";
    } else {
        infoText.textContent = "Incorrect - deducted 15 seconds";
    }
    infoText.classList.remove("hide");
    setTimeout(function(){
        infoText.classList.add("hide");
    }, 3000);
}

// listen for click on a/b/c/d and evaluate if correct
quiz.addEventListener("click", function(event) {
    if(secondsLeft < 1) {
        return;
    }
    var infoText = document.getElementById("info");
    infoText.classList.add("hide");
    var element = event.target;
    var userChoice = element.dataset.option;
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if(userChoice === correctAnswer) {
        //answer is correct
        showInfo("correct");
        if(currentQuestionIndex < questions.length && secondsLeft > 0) {
            // last question or 1 more & time left
            if(currentQuestionIndex == questions.length - 1 && secondsLeft > 0) {
                //if last question & time left you win
                yourScore = secondsLeft;
                initialsScreen.classList.remove("hide");
                quiz.classList.add("hide");
                clearInterval(intervalID);
            }
            if(yourScore == "") {
                currentQuestionIndex++;
            buildQuiz(currentQuestionIndex);
            }
            
        } else {
            clearInterval(intervalID);
            var infoText = document.getElementById("info");
            infoText.textContent = "Time is up!";
            infoText.classList.remove("hide");
        }
        
    } else {
        if(currentQuestionIndex == questions.length - 1 && secondsLeft > 0) {
            //if last question & time left you win even though you got last question wrong
            secondsLeft -=15;
            timerText.textContent = "Remaining time: " + secondsLeft;
            yourScore = secondsLeft;
            initialsScreen.classList.remove("hide");
            quiz.classList.add("hide");
            clearInterval(intervalID);
        } else {
            secondsLeft -=15;
            timerText.textContent = "Remaining time: " + secondsLeft;
            showInfo("x");
            if(currentQuestionIndex < questions.length -1 && secondsLeft > 0) {
                currentQuestionIndex++;
                buildQuiz(currentQuestionIndex);
            } else {
                //time is up
                clearInterval(intervalID);
                var infoText = document.getElementById("info");
                infoText.textContent = "Time is up!";
                infoText.classList.remove("hide");
            }
        }
        
    }
    })

submit.addEventListener("click", saveScore);