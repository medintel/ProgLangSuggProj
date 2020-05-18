
// function tallyResults(){
//   var aRuby = 0;
//   var bPython = 0;
//   var cJS = 0;
//   var dGo = 0;
//   var eCs = 0;

//   var questionAnswer;
//   var questions = document.getElementsByClassName("quizQuestion");
//   var questionsTotal = 5;

//   for(var i = 0; i < questionsTotal; i++) {
//     questionAnswer = questions[i].options[questions[i].selectedIndex].value;
//     if (questionAnswer === "a") {
//       aRuby++;
//       }
//     else if (questionAnswer === "b") {
//       bPython++;
//       }
//     else if (questionAnswer === "c") {
//       cJS++;
//       }
//     else if (questionAnswer === "d")  {
//       dGo++;
//       }
//     else (questionAnswer === "e")  {
//       eCs++;
//       }
//    }

//    var results = [aRuby, bPython, cJS, dGo, eCs];
//    results.sort();
//    results.reverse();
//    let rank1 = results[0];
//    let rank2 = results[1];
//    let rank3 = results[2];

// }


$(document).ready(function() {
  $("#blanks").submit(function(){
    event.preventDefault();

    // $("button").click(function () {
    //   $("." + blanks).toggle();
    //   $("." + results).toggle();
    // });
  
    // $("button").click(function () {
    // $("btn").click(function() {
    $("#results").toggle();
    $("#blanks").toggle();
    alert("Hi");
      // });

  });
});

  // $("form#questions").submit(function(){
  //       let rank1 = "none"
  //       let rank2 = "none"
  //       let rank3 = "none"
  //     $("#quizQuestion").tallyResults() {

  //       if ((rank1 || rank2 || rank3) === aRuby) {
  //         ("#ruby").show();
  //       }
  //       else if ((rank1 || rank2 || rank3) === bPython) {
  //         ("#python").show();
  //       }
  //       else if ((rank1 || rank2 || rank3) === cJS) {
  //         ("#js").show();
  //       }
  //       else if ((rank1 || rank2 || rank3) === dGo) {
  //         ("#go").show();
  //       }
  //       else if ((rank1 || rank2 || rank3) === eCs) {
  //         ("#cs").show();
  //       }
  //       else {
  //         alert("Something went wrong!")
  //       }
  //     }


    // $("form#blanks").submit(function() {
    //   var blanks = ["userName"];

    //   blanks.forEach(function(blank) {
    //     var userInput = $("input#" + blank).val();
    //     $("." + blank).text(userInput).val();
    //    });
    // });

  // $("btn").click(function() {
  //   $("#blanks").toggle();
  //   $("#results").toggle();
//   });

//   // event.preventDefault();

// });
