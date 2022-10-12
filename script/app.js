let email = {}, password = {}, signInButton;

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    // var passwordinput = document.querySelector('.js-password-input');
    // var passwordShow = document.querySelector('.js-password-show');

    // const passwordOption = ['password', 'text'];

    // passwordShow.addEventListener( "change", function() {
    //     console.log("test");

    //     passwordinput.type = passwordOption[+this.checked];
    // });
}

function getDOMElements() {
    email.input = document.querySelector('.js-email-input');
    email.field = document.querySelector('.js-email-field');
    email.errorMessage = document.querySelector('.js-email-error-message');

    password.input = document.querySelector('.js-password-input');
    password.field = document.querySelector('.js-password-field');
    password.errorMessage = document.querySelector('.js-password-error-message');
    
    signInButton = document.querySelector('.js-sign-in');
}

function enableListeners() {
    email.input.addEventListener('blur', () => {
        if(isEmpty(email.input.value))
        {
            email.field.classList.add("has-error");
            email.errorMessage.classList.add("is-visible");
        }
        
        else if (!isEmpty(email.input.value) && !isValidEmail(email.input.value))
        {
            email.field.classList.add("has-error");
            email.errorMessage.classList.add("is-visible");
            email.errorMessage.innerHTML = "Invalid email adres";
        }

        else
        {
            email.field.classList.remove("has-error");
            email.errorMessage.classList.remove("is-visible");
        }
    });

    password.input.addEventListener('blur', () => {
        if (isEmpty(password.input.value))
        {
            password.field.classList.add("has-error");
            password.errorMessage.classList.add("is-visible");
            console.log("lost focus");
        }
        else
        {
            password.field.classList.remove("has-error");
            password.errorMessage.classList.remove("is-visible");
        }
    })
}

const isValidEmail = function(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isEmpty = function(fieldValue) {
    console.log(!fieldValue || !fieldValue.length);
    return !fieldValue || !fieldValue.length;
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    getDOMElements();
    enableListeners();
});