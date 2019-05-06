var userData = require("../data/friends");

// routes
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(userData);
  });
  var comparisonUserTotal = 0;

  var friendScores = [];

  app.post("/api/friends", function (req, res) {
    var currentUserScores = req.body.scores;

    console.log("Current user scores: " + currentUserScores);

    for (var i = 0; i < userData.length; i++) {

      var comparisonUserScores = userData[i].scores;

      comparisonUserTotal = compatibility(currentUserScores, comparisonUserScores);

      friendScores.push(comparisonUserTotal);
    }

    console.log("Array of friend scores: " + friendScores);

    var index = 0;
    var value = friendScores[0];

    for (var i = 0; i < friendScores.length; i++) {
      console.log("Value of item in array: " + friendScores[i]);
      if (friendScores[i] < value) {
        value = friendScores[i];
        index = i;
      }
    }

    console.log("Match name: " + userData[index].name);

    res.send(userData[index]);

    userData.push(req.body);
  });
};

var totalDifference = 0;

function compatibility(currentUserScores, comparisonUserScores) {
  totalDifference = 0;

  for (var i = 0; i < currentUserScores.length; i++) {

    totalDifference += Math.abs(currentUserScores[i] - comparisonUserScores[i]);
  }

  console.log("Final total difference between current user and match: " + totalDifference);
  return totalDifference;
};
