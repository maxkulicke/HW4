$(document).ready(function () {

  // important to declare globally, will be incremented/interacted with by multiple functions
  var index = 0;
  var score = 0;
  var difficulty = "";

  // following onClicks select difficulty level
  $("#easy").on("click", function () {
    difficulty = "easy";
    quizRunner(easyQuiz);
    $("#difficultyModal").modal('hide')
  });

  $("#medium").on("click", function () {
    difficulty = "medium";
    quizRunner(mediumQuiz);
    $("#difficultyModal").modal('hide')
  });

  $("#hard").on("click", function () {
    difficulty = "hard";
    quizRunner(hardQuiz);
    $("#difficultyModal").modal('hide')
  });

  // quizRunner runs the show
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
      if (secondsLeft == 0) {
        display("Hall of Fame")
        clearInterval(timerInterval);
      }
    }, 1000);

    // question throw/display/checkAnswer
    var currentQuestion = difficultyArray[index];
    questionThrower(currentQuestion);
    $(".answer").on("click", function () {
      var answerId = event.target.id;
      var correct = checkAnswer(currentQuestion[answerId]);
      if (correct === "true") {
        $("#questionCard").toggleClass("correct");
        setTimeout(function () {
          $("#questionCard").toggleClass("correct");
          score++;
        }, 1000);
      } else {
        $("#questionCard").toggleClass("incorrect");
        secondsLeft = decrement(secondsLeft);
        score = secondsLeft;
        setTimeout(function () {
          $("#questionCard").toggleClass("incorrect");
        }, 1000);
      }
      index++;

      // end of quiz section
      if (index < difficultyArray.length) {
        setTimeout(function () {
          currentQuestion = difficultyArray[index];
          questionThrower(currentQuestion);
        }, 1000);
      }
      else {
        setTimeout(function () {
          clearInterval(timerInterval);
          $("#timer").hide();
          scoreboard();
        }, 1000);
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
      $("#question").text("Your Score is: " + score);
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
    secondsLeft -= 10;
    return secondsLeft;
  }

  function scoreboard() {
    display("scoreboard");
    $(".answer").hide();
    $("#goToHallOfFame").show();
    index = 0;
    if (checkForHighScore(score)) {
      display("Hall of Fame");
    }
  }


  // TODO
  // have the following three functions pass each other the arrays instead of the conditionals repeating
  // tried above passes, didn't quite get it right...
  function checkForHighScore(score) {
    if (difficulty === "easy") {
      top5scores = easyTop5Scores;
    }
    else if (difficulty === "medium") {
      top5scores = mediumTop5Scores;
    }
    else if (difficulty === "hard") {
      top5scores = hardTop5Scores;
    }
    var newHighScore = false;
    top5scores.forEach(function (oldScore) {
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

  // this function to be added back if the home hall of fame button reinstalled
  // $("#homeHallOfFameButton").on("click", function () {
  //   $("#enterName").hide();
  //   $("#nameForm").hide();
  //   $("#nameSubmit").hide();
  //   hallOfFameDisplay();
  // })

  $("#nameSubmit").on("click", function () {
    var name = $("#nameForm").val();
    hallOfFame(name);
    $("#enterName").hide();
    $("#nameForm").hide();
    $("#nameSubmit").hide();
  })

  $("#playAgain").on("click", function () {
    $("#difficultyModal").modal('show');
    $("#hallOfFameModal").modal('hide');
  });

  $("#home").on("click", function () {
    $("#hallOfFameModal").modal('hide');
  });

  function hallOfFame(name) {
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
    for (var i = 0; i < top5scores.length; i++) {
      var oldScore = parseInt(top5scores[i]);
      if (isNaN(oldScore)) {
        oldScore = 0;
      }
      if (score > oldScore) {
        var scoreReplacer = score;
        var nameReplacer = name;
        for (var j = i; j < top5scores.length; j++) {
          scoreReplacee = top5scores[j];
          nameReplacee = top5names[j];
          top5scores[j] = scoreReplacer;
          top5names[j] = nameReplacer;
          scoreReplacer = scoreReplacee;
          nameReplacer = nameReplacee;
        }

        // this should be a for loop
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

        hallOfFameDisplay();

        i = top5names.length;
      }
    }
  }

  $("#clear").on("click", function () {
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
    for (var i = 0; i < top5scores.length; i++) {
      top5scores[i] = "";
      top5names[i] = "";
    }
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

    hallOfFameDisplay();
  })

  function hallOfFameDisplay() {
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

    $("#hallOfFameScoreDisplay").text("Your Score is: " + score);
    // this should be a for loop
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