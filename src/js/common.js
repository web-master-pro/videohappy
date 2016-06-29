$(document).ready(function() {

    $(".js-scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1700);
        return false;
    });

    $('.js-popup-video').magnificPopup({
        disableOn: 100,
        type: 'iframe',
        removalDelay: 500,
        mainClass: 'mfp-zoom-in',
        preloader: false,
        fixedContentPos: true
    });

    $(".volume").on("click", function(){
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(".header__video").prop("muted",false);
        } else {
            $(".header__video").prop("muted",true);
        };
    });

    $('.js-phone-field').mask('+7 (999) 999-99-99');

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $('html').addClass('safari');
    };

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("html").addClass("macos");
    } else {
        $("html").addClass("pc");
    };

    if (navigator.userAgent.search("MSIE") >= 0) {
        $('html').addClass('ie');
    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
