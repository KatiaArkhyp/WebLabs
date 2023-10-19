function validateEmail() {
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword() {
    let password = document.getElementById("password").value;
    return password.length >= 6;
}

function validateSurname() {
    let surname = document.getElementById("surname").value;
    return /^[a-zA-Zа-яА-ЯіїІЇ ']+$/.test(surname);
}

function validateName() {
    let surname = document.getElementById("name").value;
    return /^[a-zA-Zа-яА-ЯіїІЇ ']+$/.test(surname);
}

function validateMiddleName() {
    let middleName = document.getElementById("middle-name").value;
    return /^[a-zA-Zа-яА-ЯіїІЇ ']+$/.test(middleName);
}

function isFieldNotEmpty(fieldId) {
    let field = document.getElementById(fieldId);
    return field.value.trim() !== '';
}

function validateForm() {
    clearErrorMessages();

    let isValid = true;

    if (isFieldNotEmpty("password") && !validatePassword()) {
        passwordError.innerText = 'Пароль повинен бути не менше 6 символів';
        isValid = false;
    }

    if (isFieldNotEmpty("email") && !validateEmail()) {
        emailError.innerText = 'Некоректна електронна пошта';
        isValid = false;
    }

    if (isFieldNotEmpty("surname") && !validateSurname()) {
        surnameError.innerText = 'Введіть коректне прізвище';
        isValid = false;
    }

    if (isFieldNotEmpty("name") && !validateName()) {
        nameError.innerText = "Введіть коректне ім'я";
        isValid = false;
    }

    if (isFieldNotEmpty("middle-name") && !validateMiddleName()) {
        middleNameError.innerText = 'Введіть коректне по батькові';
        isValid = false;
    }
    return isValid;
}

function clearErrorMessages() {
    emailError.innerText = '';
    passwordError.innerText = '';
    surnameError.innerText = '';
    nameError.innerText = '';
    middleNameError.innerText = '';
}

let emailError, passwordError, surnameError, nameError, middleNameError;

document.addEventListener('DOMContentLoaded', function () {
    emailError = document.getElementById('email-error');
    passwordError = document.getElementById('password-error');
    surnameError = document.getElementById('surname-error');
    nameError = document.getElementById('name-error');
    middleNameError = document.getElementById('middle-name-error');

    let inputFields = document.querySelectorAll('.form-control');
    inputFields.forEach(inputField => {
        inputField.addEventListener('input', () => {
            validateForm();
        });
    });
});

