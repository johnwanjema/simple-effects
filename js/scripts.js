$(document).ready(function() {
  $(".clickable").click(function() {
    $("img").fadeToggle();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
