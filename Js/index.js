
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


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formulario-mensaje");

    messageElement.textContent = message;
    messageElement.classList.remove("formulario-mensaje-success", "formulario-mensaje-error");
    messageElement.classList.add(`formulario-mensaje-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("formulario-input-error");
    inputElement.parentElement.querySelector(".formulario-input-error-mensaje").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("formulario-input-error");
    inputElement.parentElement.querySelector(".formulario-input-error-mensaje").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formulario-hidden");
        createAccountForm.classList.remove("formulario-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.add("formulario-hidden");
        loginForm.classList.remove("formulario-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        setFormMessage(loginForm, "error", "Usuario invalidado o contraseña incorrecta.");
    });

    document.querySelectorAll(".formulario-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "IngresarUsuario" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "El usuario debe tener minimo los 10 caracteres.");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});