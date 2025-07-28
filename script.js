let scoreA = 0;
let scoreB = 0;

function addPoints(team, points) {
    if(team === 'A') {
        scoreA += points;
        document.getElementById("scoreA").textContent = scoreA;
    } else if(team == 'B') {
        scoreB += points;
        document.getElementById("scoreB").textContent = scoreB;
    }
}

function resetScores() {
    scoreA = 0;
    scoreB = 0;
    document.getElementById("scoreA").textContent = scoreA;
    document.getElementById("scoreB").textContent = scoreB;
}