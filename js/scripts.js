
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
   var rank1 = results[0];
   var rank2 = results[1];
   var rank3 = results[2];

}


$(document).ready(function() {

$



    // alert (userName);
  // $("form#questions").submit(function(){
  //   event.preventDefault();
  //    alert('Here is the order of your ranking: 1.' + rank1 ' 2.' + rank2 ' and 3.' + rank3);
  // });

  // $("#blanks form").submit(function() {
  //   var blanks = ["userName"];

  //   blanks.forEach(function(blank) {
  //     var userInput = $("input#" + blank).val();
  //     $("." + blank).text(userInput).val();      

  // $("#blanks questions"  
  // blanks.submit(tallyResults() {
  //     alert('Here is the order of your ranking: 1.' + rank1 ' 2.' + rank2 ' and 3.' + rank3);
      
  // });
  // });


  
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

  $("#results").toggle();
  $("#blanks").toggle();
  
    


  
}):
