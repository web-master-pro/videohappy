(function () {

    // VIDEO BACKGROUND

    // var bv = new Bideo();
    // bv.init({
    //     // Video element
    //     videoEl: document.querySelector('.header__video'),

    //     // Container element
    //     container: document.querySelector('.header'),

    //     // Resize
    //     resize: true,

    //     // Array of objects containing the src and type
    //     // of different video formats to add
    //     src: [
    //         {
    //             src: 'assets/video/video-1.mp4',
    //             type: 'video/mp4'
    //         },
    //         {
    //             src: 'assets/video/video-1.ogv',
    //             type: 'video/ogv'
    //         },
    //         {
    //             src: 'assets/video/video-1.webm',
    //             type: 'video/webm'
    //         }

    //     ],

    //     // What to do once video loads (initial frame)
    //     onLoad: function () {
    //         document.querySelector('.header__video-cover').style.display = 'none';
    //         document.querySelector('.header__video-overlay').style.display = 'block';
    //     }
    // });

}());

// $( function () {
//     if ( sessionStorage.reloadAfterPageLoad ) {
//         alert( "Hello world" );
//         sessionStorage.reloadAfterPageLoad = false;
//     }
// } )
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

//
// You can for example (simplified) do something like this when the page is about to reload:

// window.onbeforeunload = function() {
//     localStorage.setItem(name, $('#inputName').val());
//     localStorage.setItem(email, $('#inputEmail').val());
//     localStorage.setItem(phone, $('#inputPhone').val());
//     localStorage.setItem(subject, $('#inputSubject').val());
//     localStorage.setItem(detail, $('#inputDetail').val());
//     // ...
// }
// Web Storage works synchronously so this can work here. Optionally you can store the data for each blur event on the elements where the data is entered.

// At page load you can check:

// window.onload = function() {

//     var name = localStorage.getItem(name);
//     if (name !== null) $('#inputName').val(name);

//     // ...
// }
// getItem returns null if the data does not exist.

// Use sessionStorage instead of localStorage if you want to store only temporary.

