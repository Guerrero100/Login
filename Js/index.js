
    /* Declaración de el formualario completo  */
    let username = document.getElementById('username');
    let formulario = document.getElementById('formulario');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    

const Expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,// Letras, guion bajo caracteres especiales. 
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



const ValidarCampos = e =>{
    Expresiones.preventDefault();

    switch(e.target.name){

        case "username":
        ValidarCampos(Expresiones.usuario, e.target, 'usuario');

        break;

        case "email":
        ValidarCampos(Expresiones.email, e.target, 'email');

        break;

        case "password":
        ValidarCampos(Expresiones.password, e.target, 'contraseña');
                         ValidarPassword2();
        break;

        case "password2":
                        ValidarPassword2();

        break;

        case "telefono":
        ValidarCampos(Expresiones.telefono, e.target, 'usuario');

        break;


    }

}


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formulario__message");

    messageElement.textContent = message;
    messageElement.classList.remove("formulario__message--success", "formulario__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("formulario__input--error");
    inputElement.parentElement.querySelector(".formulario__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("formulario__input--error");
    inputElement.parentElement.querySelector(".formulario__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#CreateAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formulario-hidden");
        createAccountForm.classList.remove("formulario-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

       

        setFormMessage(loginForm, "error", "Usuario invalidado o contraseña incorrecta.");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "El usuario ha pasado los 10 caracteres.");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});