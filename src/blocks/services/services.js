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
