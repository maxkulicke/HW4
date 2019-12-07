// var testQuestion = ["what note is not in a C major triad?", "C", "E", "G", "B"]

// will be array of easy question objects
var question1 = { question: "What note is NOT in a C major triad?" }
var ans1a = { answer: "C", correct: "false", };
var ans1b = { answer: "E", correct: "false", };
var ans1c = { answer: "G", correct: "false", };
var ans1d = { answer: "B", correct: "true", };
var easy1 = [question1, ans1a, ans1b, ans1c, ans1d];

var question2 = { question: "What major key has only 1 '#' in its key signature?" }
var ans2a = { answer: "F", correct: "false", };
var ans2b = { answer: "D", correct: "false", };
var ans2c = { answer: "G", correct: "true", };
var ans2d = { answer: "A", correct: "false", };
var easy2 = [question2, ans2a, ans2b, ans2c, ans2d];

var easyQuiz = [easy1, easy2];

$(document).ready(function () {

  $("#quiz").on("click", function () {
    // $("modal").attr("style", "display:in-line");
  })

  function quizRunner(difficultyArray) {
    questionThrower(difficultyArray);
  }
  quizRunner(easyQuiz);

  function questionThrower(difficultyArray) {
    for (var i = 0; i < difficultyArray.length; i++) {
      var question = difficultyArray[i];
      // console.log(question);
      display(question);
      // $("#question").text(testQuestion[0]);
    }
  }

  function display(question) {
    console.log(question[0]);
    $("#question").text(question[0].question);
    $("#1").text(question[1].answer);
    $("#2").text(question[2].answer);
    $("#3").text(question[3].answer);
    $("#4").text(question[4].answer);
  }

  function click() {

  }

  function checkAnswer() {

  }

  function decrement() {

  }

  function scoreboard() {

  }



})