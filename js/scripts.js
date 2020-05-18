
$(document).ready(function() {
  $("#blanks").submit(function(event){
    event.preventDefault();
    const inputName = $("input#userName").val();
    $(".userName").text(inputName).val();

    const formAnswer1 = $("input:radio[name=dog]:checked").val();
    const formAnswer2 = $("input:radio[name=live]:checked").val();
    const formAnswer3 = $("input:radio[name=work]:checked").val();
    const formAnswer4 = $("input:radio[name=desktop]:checked").val();
    const formAnswer5 = $("input:radio[name=colors]:checked").val();

    const answerArray = [formAnswer1, formAnswer2, formAnswer3,formAnswer4, formAnswer5]
    // alert(answerArray);

   if (answerArray.includes('ruby')) {
         $("#ruby").show();
    }
    // else {
    //   alert("not ruby");
    // };
    if (answerArray.includes('python')) {
      $("#python").show();
    }
    if (answerArray.includes('js')) {
      $("#js").show();
    }
    if (answerArray.includes('go')) {
      $("#go").show();
    }
    if (answerArray.includes('cs')) {
      $("#cs").show();
    }

    $("#results").toggle();
    $("#blanks").toggle();

  });
});

