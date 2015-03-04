var Silly = Silly || {}
$bg_button = $('#change_color');

$(document).ready(function(){
  $bg_button.on('click', function(){
    $('body').css("background-color", "blue");
  });
  $('#change_text').on('click', function(){
    $('body').css("color", "red");
  });

  $('#myForm').on('submit', function(){
    $('#myInput').append($('<li>').text($('myInput').val()));
  });

});



