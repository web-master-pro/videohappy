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

$(".about-menu__item")
        .mouseenter(function(){
            $(this).addClass("hover");
        })
        .mouseleave(function(){
            $(this).removeClass("hover");
        })
        .click(function(e){
            e.preventDefault();
            var index = $(".about-menu__item").index($(this)) + 1;

            $(".about__box").removeClass("active");
            if ($(this).hasClass("active")) {
                $(".about-menu__item").removeClass("active");
                $(".about__box--0").addClass("active")
            } else {
                $(".about-menu__item").removeClass("active");
                $(this).addClass("active");
                $(".about__box--" + index).addClass("active");
            };
            if ($(window).width() < 800) {
                var offset = 56;
                if ($(window).width() < 480) {
                    offset = 40;
                };
                var destination = $(".about__left").offset().top;
                if ($(".nav").hasClass("nav--fixed")) {
                    destination = destination - offset;
                } else {
                    destination = destination - 2*offset;
                };
                $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
            };
        });

$('.browsehappy').click(function() {
    $(this).slideUp();
});

$(document).ready(function(){

    var validatorContactForm = $("#contact-form").validate({
        rules: {
            name: {required: true},
            phone: {required: true},
            email: {email: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"},
            email: {email: "Неправильный формат email"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
                // alert("Спасибо! Заявка отправлена!")
            });
            return false;
        }
    });

    $("#contact-form input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#contact-form textarea" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#contact-form button").click(function (e) {
        $("#contact-form .invalid-field").removeClass("hidden").css({"display":""});
        validatorContactForm.resetForm();
        return true;
    });

});

$(document).ready(function(){

    var validatorFormContacts = $("#form-contacts").validate({
        rules: {
            name: {required: true},
            phone: {required: true},
            email: {email: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"},
            email: {email: "Неправильный формат email"},
            // message: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
            });
            return false;
        }
    });

    $("#form-contacts input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-contacts textarea" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-contacts button").click(function (e) {
        $("#form-contacts .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormContacts.resetForm();
        return true;
    });

});

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

$(document).ready(function(){

    $('.js-popup').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 500,
        mainClass: 'mfp-zoom-in',
        overflowY: 'scroll',
        fixedContentPos: true
    });

    $('.js-popup-portfolio').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 500,
        mainClass: 'mfp-zoom-in',
        overflowY: 'scroll',
        fixedContentPos: true,
        callbacks: {
            open: function() {
                var popupBox = $.magnificPopup.instance.content;
                    videoDiv = $(popupBox).children(".popup-portfolio__video"),
                    videoSrc = videoDiv.attr("data-src"),
                    newEl = '<iframe src="' + videoSrc + '" width="640" height="360" allowfullscreen></iframe>';
                    videoDiv.append(newEl);
                    $(".popup-portfolio__video").fitVids();
            },
            close: function() {
                var popupBox = $.magnificPopup.instance.content;
                    videoDiv = $(popupBox).children(".popup-portfolio__video"),
                    videoDiv.empty();;
            }
          }
    });

    $(".js-close-button").click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        return false;
    });

});

// $(document).ready(function(){
//     $(".portfolio__item")
//         .mouseenter(function(){
//             $(this).addClass("hover");
//         })
//         .mouseleave(function(){
//             $(this).removeClass("hover");
//         })
//         .click(function(e){
//             e.preventDefault();
//             if ($(this).hasClass("hover")) {
//                 $(this).removeClass("hover");
//             } else {
//                 $(this).addClass("hover");
//             };
//         });
// });

$(document).ready(function(){

    $(".serv-menu__item")
        .mouseenter(function(){
            $(this).addClass("hover");
        })
        .mouseleave(function(){
            $(this).removeClass("hover");
        })
        .click(function(e){
            e.preventDefault();
            var servIndex = $(".serv-menu__item").index($(this)) + 1;

            $(".services__box").removeClass("active");
            if ($(this).hasClass("active")) {
                $(".serv-menu__item").removeClass("active");
                $(".services__box--0").addClass("active")
            } else {
                $(".serv-menu__item").removeClass("active");
                $(this).addClass("active");
                $(".services__box--" + servIndex).addClass("active");
            };
            if ($(window).width() < 800) {
                var offset = 54;
                if ($(window).width() < 480) {
                    offset = 40;
                };
                var destination = $(".services__left").offset().top - offset;
                $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
            };
        });

});

$(document).ready(function(){

    $(".textarea__textarea")
        .focus(function() {
            $(this).prev(".textarea__placeholder").fadeOut(300);
            console.log("focus");
        })
        .blur(function() {
            if ($(this).val().length == 0) {
                $(this).prev(".textarea__placeholder").fadeIn(300);
                console.log("blur");
            }
        });

    $(".textarea__placeholder").click(function(){
        $(this).fadeOut(300);
        $(this).next(".textarea__textarea").focus();
        console.log("click");
    })

});
