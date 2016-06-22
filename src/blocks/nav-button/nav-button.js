$(document).ready(function(){
    $(".nav-button").click(function(){
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(".nav__list").slideUp(300);
        } else {
            $(this).addClass("on");
            $(".nav__list").slideDown(300);
        }
    });


});
