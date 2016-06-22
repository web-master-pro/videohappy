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
