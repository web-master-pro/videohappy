$(document).ready(function(){

    var validatorContactForm = $("#contact-form").validate({
        rules: {
            name: {required: true},
            phone: {required: true},
            email: {required: true, email: true},
            message: {required: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"},
            email: {required: "Это поле должно быть заполнено", email: "Неправильный формат email"},
            message: {required: "Это поле должно быть заполнено"}
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
