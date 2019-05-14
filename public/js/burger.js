$(document).ready(function() {

    console.log("in burger-script")

$("#burgerButton").on("click", function(event) {
    console.log("in burgerButton")
    var newBurger = {
      name: $("#burgerName").val().trim()
    };
    
    $.post("/api/burger", newBurger, function(result) {
          location.reload();
        
        }
      );
});

$(".devour").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id)
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: {devoured: 1}
    }).then(function(){
        location.reload()
        console.log("devoured")
    })
})
$(".purge").on("click", function(event) {
    console.log("click")
    var id = $(this).data("id");
    console.log(id)
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: {devoured: 0}
    }).then(function(){
        location.reload()
        console.log("devoured")
    })
});

$(".delete").on("click", function(event) {
    console.log("click")
    var id = $(this).data("id");
    console.log(id)
    $.ajax("/api/burger/" + id, {
        type: "DELETE"
    }).then(function() {
        location.reload()
    })


})







});
