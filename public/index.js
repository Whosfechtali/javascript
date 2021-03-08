$(document).ready(function(){
  $(".ButtonList").click(function() {
    $.getJSON("database.json",function(data){
      var student ="";
      $.each(data, function(key, value){
        student +="<tr>";
        student +="<td>" +value.name+ "</td>";
        student +="<td id='course'>"+value.info+"</td>";
        student +="<td id='point'>"+value.exercise_points+ "</td>";
      student +="</tr>";
      });
        $('#tables').empty().append(student);
      ChangeInfoToNothing()
      ChangePointToDash()
    });
});
});


function ChangeInfoToNothing(){
  $('#table #course').each(function() {
    var text = $(this).text().replace("null","");
    $(this).text(text);
  });
}


function ChangePointToDash(){
  $('#table #point').each(function() {
    var text = $(this).text().replace("null","-");
    var select = $(this).text()
    $(this).text(text);
    $(this).css("text-align","center")

    if(select > 50){
    $(this).css("background-color", "#4BB543")
  }else{
    $(this).css("background-color", "#FFCCCC")
  }
    });
  }
