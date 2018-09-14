var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(".surveyButton").on("click", function(event){
    event.preventDefault();
    var q1 = $("#q1").val()
    var q2 = $("#q2").val()
    var q3 = $("#q3").val()
    var q4 = $("#q4").val()
    var q5 = $("#q5").val()
    var q6 = $("#q6").val()
    var q7 = $("#q7").val()
    var q8 = $("#q8").val()
    var q9 = $("#q9").val()
    var q10 = $("#q10").val()

    var body = {data:[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]};
        $.post("/api/friends", body, function(res){
            console.log(res);
            $("#title").html(res.name);
            $("#img").attr("src", res.photo);
            modal.style.display = "block";

        })

    var q1 = $("#q1").val("")
    var q2 = $("#q2").val("")
    var q3 = $("#q3").val("")
    var q4 = $("#q4").val("")
    var q5 = $("#q5").val("")
    var q6 = $("#q6").val("")
    var q7 = $("#q7").val("")
    var q8 = $("#q8").val("")
    var q9 = $("#q9").val("")
    var q10 = $("#q10").val("") 
})

