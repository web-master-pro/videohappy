$(document).ready(function(){

    // var scroller = $(".nav__link").mPageScroll2id({
    //     scrollSpeed: 1000,
    //     autoScrollSpeed: true,
    //     scrollEasing: "swing",
    //     scrollingEasing: "swing",
    //     highlightClass: "active",
    //     targetClass: "scroll-target",
    //     forceSingleHighlight: true,
    //     offset:function(){
    //         return offsetFn();
    //     }
    // });

    function offsetFn(){
        var offset = 0;
        if ($(window).width() < 480) {
            offset = 40;
        } else if ($(window).width() < 1000){
            offset = 56;
        };
        return offset;
    };

    $(".nav__link").click(function(e){
        e.preventDefault();
        if ( ($(window).width() < 480) && $(".nav-button").hasClass("on") ) {
            $(".nav-button").removeClass("on");
            $(".nav__list").slideUp(300);
        };
        var linkHref = $(this).attr("href");
        var destination = $(linkHref).offset().top;
        if (linkHref !== "#about") {
            destination = destination - offsetFn();
        };
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
    });

});


$(window).scroll(function() {

    var navOffset = $(".about").offset().top;
        winPosition = $(this).scrollTop();

    if (winPosition >= navOffset) {
        $(".nav").addClass("nav--fixed");
    };

    if (winPosition < navOffset) {
        $(".nav").removeClass("nav--fixed");
    };

    var highlightOffset = 150,
        posAbout = $("#about").offset().top - highlightOffset,
        posPortfolio = $("#portfolio").offset().top - highlightOffset,
        posFeedbacks = $("#feedbacks").offset().top - highlightOffset,
        posServices = $("#services").offset().top - highlightOffset,
        posContacts = $("#contacts").offset().top - highlightOffset;

    $(".nav__link").removeClass("active");
    if (winPosition > posContacts) {
        $(".nav__link--contacts").addClass("active");
    } else if (winPosition > posServices) {
        $(".nav__link--services").addClass("active");
    } else if (winPosition > posFeedbacks) {
        $(".nav__link--feedbacks").addClass("active");
    } else if (winPosition > posPortfolio) {
        $(".nav__link--portfolio").addClass("active");
    } else if (winPosition > posAbout) {
        $(".nav__link--about").addClass("active");
    };

});
