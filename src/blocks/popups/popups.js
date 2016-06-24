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
