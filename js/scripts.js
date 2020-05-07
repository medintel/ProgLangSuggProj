//Business Logic
function tallyResults(){
  var aRuby = 0;
  var bPython = 0;
  var cJS = 0;
  var dGo = 0;
  var eCs = 0;

  var questionAnswer; 

  var questions = document.getElementsByClassName("quizQuestion");

  var questionsTotal = 5;

  for(var i = 0; i < questionsTotal; i++) {
    questionAnswer = questions[i].options[questions[i].selectedIndex].value;
    if (questionAnswer === "a") {
      aRuby++;
      }
    else if (questionAnswer === "b") {
      bPython++;
      } 
    else if (questionAnswer === "c") {
      JS++;
      } 
    else if (questionAnswer === "d")  {
      dGo++;
      }
    else if (questionAnswer === "e")  {
      eCs++;
      }
   }

}

//User Interface Logic 
$(document).ready(function() {
  $("#blanks form").submit(function() {
    var blanks = ["userName"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();      
    });

    $("#results").toggle();
    $("#blanks").toggle();

    event.preventDefault();
  });
});