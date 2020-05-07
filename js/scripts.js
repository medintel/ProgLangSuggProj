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
      cJS++;
      } 
    else if (questionAnswer === "d")  {
      dGo++;
      }
    else if (questionAnswer === "e")  {
      eCs++;
      }
   }

   var results = [aRuby, bPython, cJS, dGo, eCs];
   results.sort();
   results.reverse();
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

  
    //display information on first 3 elements of array
    //will revise and delete repetition when able
  //   $("#rank1").tallyResults(); {
  //   if (results[0] === aRuby) {
  //     $('#Ruby').show();
  //   } else if (results[0] === bPython) {
  //     $('#Python').show();
  //   } else if (results[0] === cJS) {
  //     $('#JS').show();
  //   } else if (results[0] === dGo) {
  //     $('#Go').show();
  //   } else if (results[0] === eCs) {
  //     $('#Cs').show();
  //   }
  // };

 // (document).ready(function() {
  //   if (results[1] === aRuby) {
  //     $('#Ruby').show();
  //   } else if (results[1] === bPython) {
  //     $('#Python').show();
  //   } else if (results[1]  === cJS) {
  //     $('#JS').show();
  //   } else if (results[1] === dGo) {
  //     $('#Go').show();
  //   } else if (results[1]  === eCs) {
  //     $('#Cs').show();
  //   }
  // });
  
 // (document).ready(function() {
  //   if (resultsArray3 === aRuby) {
  //     $('#Ruby').show();
  //   } else if (results[1] === bPython) {
  //     $('#Python').show();
  //   } else if (results[1] === cJS) {
  //     $('#JS').show();
  //   } else if (results[1] === dGo) {
  //     $('#Go').show();
  //   } else if (rresults[1] === eCs) {
  //     $('#Cs').show();
  //   }
  // });
  
    event.preventDefault();
  });
});