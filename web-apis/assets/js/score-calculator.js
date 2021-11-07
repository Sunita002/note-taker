var scoreSummary = [];
var scoreTableEl = document.querySelector("#score-table");

var retrieveScores = function() { 
    scoreSummary = localStorage.getItem("scores");

    if (!scoreSummary) {
        scoreSummary = []

        var noScores = document.createElement("div");
        noScores.setAttribute("style", "text-align: center");
        noScores.textContent = "There are no scores yet! Take the quiz to get your score!"
        document.querySelector("#score-card").appendChild(noScores);

        return false;
    }

    scoreSummary = JSON.parse(scoreSummary);
    scoreSummary.sort(compare);
}

var compare = function(a, b) {
    var scoreA = parseInt(a.score);
    var scoreB = parseInt(b.score);

    var comparison = 0;
    if (scoreA < scoreB) {
        comparison = 1;
    } else if (scoreA > scoreB) {
        comparison = -1;
    }
    return comparison;
}


var scoreSummaryTable = function() {

    for (var i = 0; i < scoreSummary.length; i++){ 
        var scoreRow = document.createElement("tr");
        scoreTableEl.appendChild(scoreRow);
    
        var nameCell = document.createElement("td");
        nameCell.className = "table-name-data";
        nameCell.textContent = scoreSummary[i].name;
        scoreRow.appendChild(nameCell);
    
        var scoreCell = document.createElement("td");
        scoreCell.className = "table-score-data";
        scoreCell.setAttribute("style", "text-align: right")
        scoreCell.textContent = scoreSummary[i].score;
        scoreRow.appendChild(scoreCell);
    }

}

retrieveScores();
scoreSummaryTable();