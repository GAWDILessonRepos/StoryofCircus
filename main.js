var Silly = Silly || {}
$bg_button = $('#change_color');

$(document).ready(function(){
  $bg_button.on('click', function(){
    $('body').css("background-color", "blue");
  });
  $('#change_text').on('click', function(){
    $('body').css("color", "red");
  });

  $('#myForm').on('submit', function(e){
    e.preventDefault();
    $('#myList').append($('<li>').text($('#myInput').val()));
    $('#myInput').val("");
  });

  $('#upsideDown').on('click', function(){
    $('body').css("transform", "scaleY(-1)");
  });

});



