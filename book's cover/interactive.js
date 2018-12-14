$(document).ready(function(){

// show/hide tools
$("#tools-btn").click(function(){
  $("#tools").toggle();
  });

// changing the cover of the book

$("#generate").click(function(){
// getting all values from form
  var title = $("#title").val();
  var subtitle = $("#subtitle").val();
  var name = $("#name").val();
  var publisher = $("#publisher").val();
  var year = $("#year").val();
  var color = $("#color").val();
  var fontColor = $("#fontColor").val();
// injecting text into the cover of the book
  $("#title1").text(title);
  $("#subtitle1").text(subtitle);
  $("#name1").text(name);
  $("#publisher1").text(publisher);
  $("#year1").text(year);
  $("#card").css("background-color", color);
  $("#card").css("color",fontColor);
  });
});
