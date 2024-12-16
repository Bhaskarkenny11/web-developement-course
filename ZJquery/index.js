alert("hello")
$("h1").css("color","purple");
$("button").text("don't click me!")
$("a").attr("href","https://www.yahoo.com")

// $(document).keydown(function(event){
//     $("h1").text(event.key)
// })

$("h1").on("mouseover",function(){
    $("h1").css("color","red")
})