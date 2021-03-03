
const btnClearScores = document.getElementById("btnClearScores");

function showScores() {
    var allScoresRaw = localStorage.getItem("highScore");
    var currentScores = []
    if(!!allScoresRaw) {
        currentScores = JSON.parse(allScoresRaw);
        currentScores.sort(function (a, b) {
            return b.score - a.score;
          });
    } 
    for (let k = 0; k < currentScores.length; k++) {
        var scoreDisplay = document.getElementById("rankings");
        let newListItem = document.createElement("li");
        newListItem.textContent = currentScores[k].initials+" - "+currentScores[k].score;
        scoreDisplay.appendChild(newListItem);
    }
}

btnClearScores.addEventListener("click", function (){
    var r = confirm("Are you sure you want to clear all the scores?");
    if (r == true) {
        localStorage.clear();
        location.reload();
    } else {
        return;
    }
    
})

showScores();