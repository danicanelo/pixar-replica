$(document).ready(function () {

    var x = window.matchMedia("(max-width: 600px)")

    if (x.matches) { // If media query matches
        $(".back").click(function () {
            $(".back").hide();
        })

        $("#burger").click(function () {
            $("#principal").slideToggle("slow");
        })

        $("#shortfilms, #technology, #careers, #extras, #about").click(function () {
            $(".back").show();
        })
    }

});

