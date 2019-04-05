$(document).ready(function(){
    $("#register-button").click(function(event){
        event.preventDefault();
        let email = $("#email-register-input").val();
        let password = $("#password-register-input").val();
        let confirmPassword = $("#confirm-password-register-input").val();
        $(".error").remove();

        if (email.length < 1) {
            $("#email-register-input").after("<div class='error'>Esse campo é obrigatório</div>");
        }
        else{
            let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            let validEmail = regEx.test(email);
            $("#email-register-input").after("<div class='error'>Favor digitar um e-mail válido</div>");
        }
        if (password.length < 8) {
            $("#password-register-input").after("<div class='error'>Esse campo é obrigatório</div>");
        }
        if (confirmPassword.length !== password.length) {
            $("#confirm-password-register-input").after("<div class='error'>Essa senha não confere com a senha digitada</div>");
        }
    });
});