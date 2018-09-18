var express = require("express");
var router = express.Router();
var friends = require("../data/friends.js");

router.get("/api/friends", function(req, res) {
  res.json(friends);
});

router.post("/api/friends", function(req, res) {
  console.log("works");

  var bestMatch = {
    name: "",
    photo: "",
    friendDifference: Infinity
  };

  var userScores = req.body.data;
  var totalDifference;

  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;

    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];
      var currentUserScore = userScores[j];

      totalDifference += Math.abs(
        parseInt(currentUserScore) - parseInt(currentFriendScore)
      );
    }

    if (totalDifference <= bestMatch.friendDifference) {
      bestMatch.name = currentFriend.name;
      bestMatch.photo = currentFriend.photo;
      bestMatch.friendDifference = totalDifference;
    }
  }

  res.json(bestMatch);
});

module.exports = router;
