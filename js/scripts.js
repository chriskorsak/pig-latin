//Business Logic
const pigLatin = function(translation) {
  if (translation === "a" || translation === "e" || translation === "i" || translation === "o" || translation === "u")  {
    return translation + "way";
} else { 
    return translation + "nay";
}

};









//User Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function() {
    event.preventDefault();
    var translation = $("#words").val();
    var result = pigLatin(translation);
      $(".translation").text(result);
    
    $("#result").show();

  });
});