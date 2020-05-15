//Business Logic










//User Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function() {
    event.preventDefault();
    var translation = $("#words").val();
    pigLatin(translation);
    $(".translation").text(translation);
    $("#result").show();
  });
});