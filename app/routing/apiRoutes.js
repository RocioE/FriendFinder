var people = require("../data/friends");


function computeDifference(scoresA, scoresB) {
    var differences = 0

    differences = differences + Math.abs(scoresA[0] - scoresB[0])
    differences = differences + Math.abs(scoresA[1] - scoresB[1])
    differences = differences + Math.abs(scoresA[2] - scoresB[2])
    differences = differences + Math.abs(scoresA[3] - scoresB[3])
    differences = differences + Math.abs(scoresA[4] - scoresB[4])
    differences = differences + Math.abs(scoresA[5] - scoresB[5])
    differences = differences + Math.abs(scoresA[6] - scoresB[6])
    differences = differences + Math.abs(scoresA[7] - scoresB[7])
    differences = differences + Math.abs(scoresA[8] - scoresB[8])
    differences = differences + Math.abs(scoresA[9] - scoresB[9])
    return differences
}
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(people[1]);
    });
    app.post("/api/friends", function(req, res) {
        var userScores= req.body.scores
        var miaScores= people[0].scores
        var miaDifference = computeDifference(userScores, miaScores)    
        var theeGirlScores=people[1].scores
        var theeGirlDifference = computeDifference(userScores, theeGirlScores)
    
        res.json(people[1]);
    });
  };