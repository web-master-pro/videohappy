(function () {

    // ПОДСТАНОВКА ГОРОДА

    var QueryString = function () {
        // This function is anonymous, is executed immediately and
        // the return value is assigned to QueryString!
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }();

    function getRegion(array,keyText) {
        for(i=0;i<array.length;i++){
            if(array[i].id == keyText) {
                return array[i].caption;
            };
        };
    };

    if (QueryString.region) {
        var region = getRegion(regions, QueryString.region);
        if (region) {
            document.querySelector('.header__region').innerHTML = getRegion(regions,QueryString.region);
        };
    };

}());

//= ../libs/bideo/bideo.js

(function () {

    // VIDEO BACKGROUND

    var currentVideoName,
        firstVideoIndex = 0;
        lastVideoIndex = localStorage.getItem("video"),
        currentVideoIndex = 0,
        videosQuantity = backgroundVideos.length;

    // console.log("videosQuantity " + videosQuantity);

    if (lastVideoIndex == null) {
        lastVideoIndex = +firstVideoIndex - 1;
    };
    // console.log("lastVideoIndex " + lastVideoIndex);

    if (lastVideoIndex < videosQuantity - 1){
        currentVideoIndex = +lastVideoIndex + 1;
    };

    // console.log("currentVideoIndex " + currentVideoIndex);

    currentVideoName = backgroundVideos[currentVideoIndex];
    // console.log("currentVideoName " + currentVideoName);
    localStorage.setItem("video", currentVideoIndex);


    var bv = new Bideo();
    bv.init({
        // Video element
        videoEl: document.querySelector('.header__video'),

        // Container element
        container: document.querySelector('.header'),

        // Resize
        resize: true,

        // Array of objects containing the src and type
        // of different video formats to add
        src: [
            {
                src: 'assets/video/' + currentVideoName +'.mp4',
                type: 'video/mp4'
            },
            {
                src: 'assets/video/' + currentVideoName +'.ogv',
                type: 'video/ogv'
            },
            {
                src: 'assets/video/' + currentVideoName +'.webm',
                type: 'video/webm'
            }

        ],

        // What to do once video loads (initial frame)
        onLoad: function () {
            document.querySelector('.header__video-cover').style.display = 'none';
            document.querySelector('.header__volume').style.display = 'block';
            // document.querySelector('.header__video-overlay').style.display = 'block';
        }
    });

}());

