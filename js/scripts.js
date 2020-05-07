$(document).ready(function() {
  $("#blanks form").submit(function() {
    var blanks = ["userName"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();      
    });

    $("#results").show();

    event.preventDefault();
  });
});