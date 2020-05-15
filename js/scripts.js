//Business Logic
const pigLatin = function(translation) {
  return false;
}








//User Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function() {
    event.preventDefault();
    var translation = $("#words").val();
    var result = pigLatin(translation);
      if (result === false) {
      $(".translation").text(translation);
    }
    $("#result").show();

  });
});