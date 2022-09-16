var Login = function(csrf_token) {

    // alert(csrf_token);
    var handleLogin = function() {

        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },

            messages: {
                username: {
                    required: "Username is required."
                },
                password: {
                    required: "Password is required."
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit
                $('.alert-danger', $('.login-form')).show();
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function(form) {

                $.ajax({
                    type : 'POST',
                    url  : 'login',
                    data : $('.login-form').serialize(),
                    beforeSend: function() {
                       Metronic.blockUI({
                          boxed: true
                       });
                    },
                    success :  function(){
                        window.location.reload();
                    },
                    error: function(){

                        Metronic.unblockUI();
                        $.notific8('zindex', 11500);
                        $.notific8('Username dan Password Salah!.', {
                            heading: 'Error.',
                            theme: 'ruby',
                            horizontalEdge: 'top',
                            verticalEdge: 'right',
                            life: '3000'
                        });
                    }
                });
            }
        });

        $('.login-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
    }

    return {
        //main function to initiate the module
        init: function() {

            handleLogin();

        }

    };

}();
