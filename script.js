// // LOCAL STORAGE
// var score1 = localStorage.getItem("score1");
// var score2 = localStorage.getItem("score2");
// var score3 = localStorage.getItem("score3");
// var score4 = localStorage.getItem("score4");
// var score5 = localStorage.getItem("score5");

// var top5scores = [score1, score2, score3, score4, score5];

// var name1 = localStorage.getItem("name1");
// var name2 = localStorage.getItem("name2");
// var name3 = localStorage.getItem("name3");
// var name4 = localStorage.getItem("name4");
// var name5 = localStorage.getItem("name5");

// var top5names = [name1, name2, name3, name4, name5];

$(document).ready(function () {

  for (var i = 0; i < 5; i++) {
    console.log("top of script.js for loop, checking reference of name/score arrays");
    console.log("easy arrays");
    console.log("easy scores: " + easyTop5Scores[i]);
    console.log("easy names: " + easyTop5Names[i]);
    console.log("medium arrays");
    console.log("medium scores: " + mediumTop5Scores[i]);
    console.log("medium names: " + mediumTop5Names[i]);
    console.log("hard arrays");
    console.log("hard scores: " + hardTop5Scores[i]);
    console.log("hard names: " + hardTop5Names[i]);
  }

  // CONSIDER: implementing some "this" for targeting elements
  // important to declare globally, will be incremented/interacted with by multiple functions
  var index = 0;
  var score = 0;
  var difficulty = "";

  $("#easy").on("click", function () {
    difficulty = "easy";
    console.log("difficulty within onClick is: " + difficulty);
    quizRunner(easyQuiz);
    $("#difficultyModal").modal('hide')
  });

  $("#medium").on("click", function () {
    difficulty = "medium";
    console.log("difficulty within onClick is: " + difficulty);
    quizRunner(mediumQuiz);
    $("#difficultyModal").modal('hide')
  });

  $("#hard").on("click", function () {
    difficulty = "hard";
    console.log("difficulty within onClick is: " + difficulty);
    quizRunner(hardQuiz);
    $("#difficultyModal").modal('hide')
  });

  function quizRunner(difficultyArray) {
    $(".answer").off("click");
    $("#timer").text("Time Remaining");
    $("#timer").show();
    $(".answer").show();

    // timer section
    var secondsLeft = 15 * difficultyArray.length - 1;
    var timerInterval = setInterval(function () {
      $("#timer").text(secondsLeft)
      secondsLeft--;
      score = secondsLeft;
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    // question throw/display/checkAnswer
    var currentQuestion = difficultyArray[index];
    questionThrower(currentQuestion);
    $(".answer").on("click", function () {
      // could following line use "this"?
      var answerId = event.target.id;
      var correct = checkAnswer(currentQuestion[answerId]);
      if (correct === "true") {
        score++;
      } else {
        secondsLeft = decrement(secondsLeft);
        score = secondsLeft;
      }
      index++;

      // end of quiz section
      if (index < difficultyArray.length) {
        currentQuestion = difficultyArray[index];
        questionThrower(currentQuestion);
      }
      else {
        clearInterval(timerInterval);
        $("#timer").hide();
        scoreboard();
      }
    });
  }

  function questionThrower(question) {
    display(question);
  }

  function display(question) {
    $("#goToHallOfFame").hide();
    if (question === "scoreboard") {
      $("#question").text("Your Score is: " + score);
    }
    else if (question === "Hall of Fame") {
      // hallOfFameDisplay();
      $("#question").hide();
      $(".answer").hide();
      $("#timer").show();
      $("#timer").text("Congratulations! Welcome to the Hall of Fame!");
      $("#goToHallOfFame").show();
    }
    else {
      $("#question").show();
      $(".answer").show();
      $("#question").text(question[0].question);
      $("#1").text(question[1].answer);
      $("#2").text(question[2].answer);
      $("#3").text(question[3].answer);
      $("#4").text(question[4].answer);
    }
  }

  function checkAnswer(answer) {
    var correct = answer.correct;
    return correct;
  }

  function decrement(secondsLeft) {
    secondsLeft -= 5;
    return secondsLeft;
  }

  function scoreboard() {
    display("scoreboard");
    $(".answer").hide(); //redundant? see display()
    $("#goToHallOfFame").show();
    index = 0;
    console.log("scoreboard() calling checkForHighScore(), difficulty is: " + difficulty);
    if (checkForHighScore(score)) {
      display("Hall of Fame");
    }
  }


  // TODO
  // have the following three functions pass each other the arrays instead of the conditionals repeating
  function checkForHighScore(score) {
    console.log("checkForHighScore() called, difficulty is: " + difficulty)
    if (difficulty === "easy") {
      top5scores = easyTop5Scores;
      console.log("easy difficulty if statement, difficulty is: " + difficulty)
    }
    else if (difficulty === "medium") {
      top5scores = mediumTop5Scores;
      console.log("medium difficulty if statement, difficulty is: " + difficulty)
    }
    else if (difficulty === "hard") {
      top5scores = hardTop5Scores;
      console.log("hard difficulty if statement, difficulty is: " + difficulty)
    }
    // delete this later
    else {
      alert("can't find appropriate array (within checkForHighScore()!");
    }
    var newHighScore = false;
    top5scores.forEach(function (oldScore) {
      console.log("checkForHighScore forEach examing old score: " + oldScore + " difficulty is: " + difficulty);
      if (score > oldScore) {
        newHighScore = true;
      }
    });
    return newHighScore;
  }

  // only allows name entry to hall of fame if new high score
  $("#goToHallOfFame").on("click", function () {
    if (checkForHighScore(score)) {
      $("#enterName").show();
      $("#nameForm").show();
      $("#nameSubmit").show();
    }
    else {
      $("#enterName").hide();
      $("#nameForm").hide();
      $("#nameSubmit").hide();
    }
    hallOfFameDisplay();
    $("#questionModal").modal('hide');
  });

  $("#nameSubmit").on("click", function () {
    var name = $("#nameForm").val();
    console.log("submit button calling hallOfFame() with name: " + name);
    hallOfFame(name);
  })

  $("#playAgain").on("click", function () {
    $("#difficultyModal").modal('show');
    $("#hallOfFameModal").modal('hide');
  });

  $("#home").on("click", function () {
    $("#hallOfFameModal").modal('hide');
  });

  function hallOfFame(name) {
    console.log("hallOfFame() called, difficulty is: " + difficulty)
    if (difficulty === "easy") {
      top5scores = easyTop5Scores;
      top5names = easyTop5Names;
    }
    else if (difficulty === "medium") {
      top5scores = mediumTop5Scores;
      top5names = mediumTop5Names;
    }
    else if (difficulty === "hard") {
      top5scores = hardTop5Scores;
      top5names = hardTop5Names;
    }
    // delete this later
    else {
      alert("can't find appropriate difficulty variable (within hallOfFame())!");
    }
    console.log("right before outer forLoop, top5Scores is: " + top5scores);
    for (var i = 0; i < top5scores.length; i++) {
      console.log("entered hallOfFame() outer forLoop");
      var oldScore = parseInt(top5scores[i]);
      console.log("oldScore: " + oldScore);
      if (isNaN(oldScore)) {
        oldScore = 0;
      }
      console.log("top5Scores array value: " + top5scores[i]);
      console.log("outer for loop array reference value is: " + oldScore);
      if (score > oldScore) {
        console.log("satisfied hallOfFame() for loop conditional if (score > oldScore");
        // score entry loop
        var scoreReplacer = score;
        var nameReplacer = name;
        for (var j = i; j < top5scores.length; j++) {
          ("entered hallOfFame() inner forLoop, array insertion");
          scoreReplacee = top5scores[j];
          nameReplacee = top5names[j];
          top5scores[j] = scoreReplacer;
          top5names[j] = nameReplacer;
          scoreReplacer = scoreReplacee;
          nameReplacer = nameReplacee;
        }

        console.log("one line above hallOfFame() localStorage.setItem section");
        // could this be a for loop?
        localStorage.setItem(difficulty + "Score1", top5scores[0]);
        localStorage.setItem(difficulty + "Name1", top5names[0]);

        localStorage.setItem(difficulty + "Score2", top5scores[1]);
        localStorage.setItem(difficulty + "Name2", top5names[1]);

        localStorage.setItem(difficulty + "Score3", top5scores[2]);
        localStorage.setItem(difficulty + "Name3", top5names[2]);

        localStorage.setItem(difficulty + "Score4", top5scores[3]);
        localStorage.setItem(difficulty + "Name4", top5names[3]);

        localStorage.setItem(difficulty + "Score5", top5scores[4]);
        localStorage.setItem(difficulty + "Name5", top5names[4]);

        console.log("difficulty, right before hallOfFameDisplay() is called (within hallOfFame()) is " + difficulty);
        hallOfFameDisplay();

        i = top5names.length;
      }
    }
  }

  // could this be a for loop?
  function hallOfFameDisplay() {
    console.log("hallOfFameDisplay() called, difficulty is: " + difficulty)
    if (difficulty === "easy") {
      top5scores = easyTop5Scores;
      top5names = easyTop5Names;
    }
    else if (difficulty === "medium") {
      top5scores = mediumTop5Scores;
      top5names = mediumTop5Names;
    }
    else if (difficulty === "hard") {
      top5scores = hardTop5Scores;
      top5names = mediumTop5Names;
    }
    // delete this later
    else {
      alert("can't find appropriate array (within hallOfFameDisplay())!");
    }
    $("#rank1name").text(top5names[0]);
    $("#rank1score").text(top5scores[0]);

    $("#rank2name").text(top5names[1]);
    $("#rank2score").text(top5scores[1]);

    $("#rank3name").text(top5names[2]);
    $("#rank3score").text(top5scores[2]);

    $("#rank4name").text(top5names[3]);
    $("#rank4score").text(top5scores[3]);

    $("#rank5name").text(top5names[4]);
    $("#rank5score").text(top5scores[4]);
  }

})