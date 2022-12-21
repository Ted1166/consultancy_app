function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add("form__message--${type}");
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__message--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

setFormMessage(loginForm, "success", "You're logged in!");

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const creatAccountForm = document.querySelector("#createAccount"); 

    document.querySelector("#linkcreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        creatAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        creatAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username or password");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e =>{

            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 1) {
                setInputError(inputElement, "Username must have atleast 1 character");
            }
        })

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
