

function showScores() {
    console.log("I am in the showScores function");
    var allScoresRaw = localStorage.getItem("highScore");
    var currentScores = []
    if(!!allScoresRaw) {
        currentScores = JSON.parse(allScoresRaw);
        currentScores.sort(function (a, b) {
            return b.score - a.score;
          });
    } 
    for (let k = 0; k < currentScores.length; k++) {
        console.log(currentScores[k]);
        var scoreDisplay = document.getElementById("rankings");
        let newListItem = document.createElement("li");
        newListItem.textContent = currentScores[k].initials+" - "+currentScores[k].score;
        scoreDisplay.appendChild(newListItem);
        console.log(newListItem);
    }
}

showScores();