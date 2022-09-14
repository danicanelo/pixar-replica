$( document ).ready(function() {

    $("#burger").click(function(){
        $("#principal").slideToggle("slow");
    })

    $("#shortfilms, #technology, #careers, #extras, #about").click(function(){
        $(".back").show();
    })

    $(".back").click(function(){
        $(".back").hide();
    })

});