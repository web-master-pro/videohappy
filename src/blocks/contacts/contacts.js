$(document).ready(function(){

    var validatorFormContacts = $("#form-contacts").validate({
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
                // $.magnificPopup.open({
                //     items:{
                //         src:$('#popup-thankyou')
                //     },
                //     type:'inline',
                //     midClick: true,
                //     removalDelay: 500,
                //     mainClass: 'mfp-zoom-in',
                //     overflowY: 'scroll',
                //     fixedContentPos: false
                // });
                alert("Спасибо! Заявка отправлена!")
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
