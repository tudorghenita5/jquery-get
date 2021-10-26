$(document).ready(function(){

  $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {

    var list = [];

    $.each(data, function(key, val) {
      list += "<li>" + val.title + "</li>";
    });

    $(".container").append('<ul>' + list + '</ul>');

  });

  $('.loader')
    .hide()
    .ajaxStart(function() {
      $(this).show();
    })
    .ajaxStop(function() {
      $(this).hide();
    })
  ;

});