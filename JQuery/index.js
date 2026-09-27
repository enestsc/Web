$("h1").addClass("big-text margin-50");

$(document).keydown(function(event){
    var letter = event.key;
    $("h1").text(letter);
    console.log(letter);
})