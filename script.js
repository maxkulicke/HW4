// EASY
// will be array of easy question objects
var eQuestion1 = { question: "What note is NOT in a C major triad?" };
var eAns1a = { answer: "C", correct: "false", };
var eAns1b = { answer: "E", correct: "false", };
var eAns1c = { answer: "G", correct: "false", };
var eAns1d = { answer: "B", correct: "true", };
var easy1 = [eQuestion1, eAns1a, eAns1b, eAns1c, eAns1d];

var eQuestion2 = { question: "What major key has only 1 '#' in its key signature?" };
var eAns2a = { answer: "F", correct: "false", };
var eAns2b = { answer: "D", correct: "false", };
var eAns2c = { answer: "G", correct: "true", };
var eAns2d = { answer: "A", correct: "false", };
var easy2 = [eQuestion2, eAns2a, eAns2b, eAns2c, eAns2d];

var eQuestion3 = { question: "Which scale degree is lowered by a half-step (semitone) to turn a major triad into a minor triad?" };
var eAns3a = { answer: "iii", correct: "true", };
var eAns3b = { answer: "vii", correct: "false", };
var eAns3c = { answer: "v", correct: "false", };
var eAns3d = { answer: "i", correct: "false", };
var easy3 = [eQuestion3, eAns3a, eAns3b, eAns3c, eAns3d];

var easyQuiz = [easy1, easy2, easy3];

// MEDIUM
// will be array of medium question objects
var mQuestion1 = { question: "In the normal diatonic series, which chord has a naturally occurring dominant 7th?" };
var mAns1a = { answer: "I", correct: "false", };
var mAns1b = { answer: "V", correct: "true", };
var mAns1c = { answer: "iii", correct: "false", };
var mAns1d = { answer: "vii", correct: "false", };
var medium1 = [mQuestion1, mAns1a, mAns1b, mAns1c, mAns1d];

var mQuestion2 = { question: "What two internal intervals comprise both the major and minor triads (1st to 3rd and 3rd to 5th)?" };
var mAns2a = { answer: "Minor 3rd, 2nd", correct: "false", };
var mAns2b = { answer: "Major 3rd, 4th", correct: "false", };
var mAns2c = { answer: "Minor 3rd, 5th", correct: "false", };
var mAns2d = { answer: "Major 3rd, Minor 3rd", correct: "true", };
var medium2 = [mQuestion2, mAns2a, mAns2b, mAns2c, mAns2d];

var mQuestion3 = { question: "What scale degree of the major scale is referred to as the relative minor?" };
var mAns3a = { answer: "V", correct: "false", };
var mAns3b = { answer: "vi", correct: "true", };
var mAns3c = { answer: "IV", correct: "false", };
var mAns3d = { answer: "ii", correct: "false", };
var medium3 = [mQuestion3, mAns3a, mAns3b, mAns3c, mAns3d];

var mediumQuiz = [medium1, medium2, medium3];

// HARD
// will be array of hard question objects
var hQuestion1 = { question: "Which scale degree gets raised a half step from to make an augmented triad?" }
var hAns1a = { answer: "i", correct: "false", };
var hAns1b = { answer: "iii", correct: "false", };
var hAns1c = { answer: "v", correct: "true", };
var hAns1d = { answer: "vii", correct: "false", };
var hard1 = [hQuestion1, hAns1a, hAns1b, hAns1c, hAns1d];

var hQuestion2 = { question: "An instance of a dominant V chord in a minor key creates what sort of minor scale?" }
var hAns2a = { answer: "melodic", correct: "false", };
var hAns2b = { answer: "natural", correct: "false", };
var hAns2c = { answer: "dorian", correct: "false", };
var hAns2d = { answer: "harmonic", correct: "true", };
var hard2 = [hQuestion2, hAns2a, hAns2b, hAns2c, hAns2d];

var hQuestion3 = { question: "Which major mode has a naturally occurring tritone interval between the 1st and the 4th scale degree?" }
var hAns3a = { answer: "Ionian", correct: "false", };
var hAns3b = { answer: "Lydian", correct: "true", };
var hAns3c = { answer: "Mixolydian", correct: "false", };
var hAns3d = { answer: "Pentatonic", correct: "false", };
var hard3 = [hQuestion3, hAns3a, hAns3b, hAns3c, hAns3d];

var hardQuiz = [hard1, hard2, hard3];

// Top 5 Scores, local storage
var rank1 = localStorage.getItem("rank1");
var rank2 = localStorage.getItem("rank2");
var rank3 = localStorage.getItem("rank3");
var rank4 = localStorage.getItem("rank4");
var rank5 = localStorage.getItem("rank5");
// localStorage.setItem("count", count);
var top5 = [rank1, rank2, rank3, rank4, rank5];

$(document).ready(function () {

  // important to declare globally, will be incremented/interacted with by multiple functions
  var index = 0;
  score = 0;

  $("#easy").on("click", function () {
    quizRunner(easyQuiz);
  });

  $("#medium").on("click", function () {
    quizRunner(mediumQuiz);
  });

  $("#hard").on("click", function () {
    quizRunner(hardQuiz);
  });

  function quizRunner(difficultyArray) {
    console.log("index at top of quizRunner is: " + index);
    // these three are mostly for restarts of quiz runner
    $("#timer").text("Time Remaining");
    $("#timer").show();
    $(".answer").show();

    // timer section
    var secondsLeft = 10 * difficultyArray.length - 1;
    var timerInterval = setInterval(function() {
      $("#timer").text(secondsLeft)
      secondsLeft--;
      score = secondsLeft;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    // question throw/display/checkAnswer
    var currentQuestion = difficultyArray[index];
    questionThrower(currentQuestion);
    $(".answer").on("click", function () {
      console.log("CLICK!");
      var answerId = event.target.id;
      console.log("answer ID according to onClick is: " + answerId);
      var correct = checkAnswer(currentQuestion[answerId]);
      console.log("correct returned to quizRunner is: " + correct);
      if (correct === "true") {
        score++;
      } else {
        secondsLeft = decrement(secondsLeft);
        score = secondsLeft;
      }
      index++;
      console.log("index within onClick is: " + index);

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
      $("#question").hide();
      $("#1").hide();
      $("#2").hide();
      $("#3").hide();
      $("#4").hide();
      $("#timer").show();
      $("#timer").text("Congratulations! Welcome to the Hall of Fame!");
      $("#goToHallOfFame").show();
    }
    else {
      $("#question").text(question[0].question);
      $("#1").text(question[1].answer);
      $("#2").text(question[2].answer);
      $("#3").text(question[3].answer);
      $("#4").text(question[4].answer);
    }
  }

  function checkAnswer(answer) {
    var correct = answer.correct;
    console.log("checkAnswer says answer is: " + correct);
    return correct;
  }

  function decrement(secondsLeft) {
    console.log("Decrement says: wrong answer");
    secondsLeft -= 5;
    return secondsLeft;
  }

  function scoreboard() {
    display("scoreboard");
    $(".answer").hide();
    index = 0;
    console.log("scoreboard turned index into: " + index);
    top5.forEach(function(rank) {
      if (score > rank) {
        hallOfFame(score);
      }
    });
  }

  function hallOfFame(score) {
    display("Hall of Fame");
  }



})