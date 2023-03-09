const setting = {
    inputSelector: '.popup__input',
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__submit-button',
    inputErrorClass: '.popup__input-error'
};


const showInputError = (formElement, inputElement, errorMessage, setting) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(setting.inputErrorClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, setting) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(setting.inputErrorClass);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, setting) => {
    if ((inputElement.type === 'text') && (inputElement.validity.patternMismatch)) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    };

    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    };
};

const setEventListeners = (formElement, setting) => {
    const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, setting);
            toggleButtonState(inputList, formElement, setting, inputElement);
        });
    });
};

export const enableValidation = (setting) => {
    const formList = Array.from(document.querySelectorAll(setting.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, setting);
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

function toggleButtonState(inputList, formElement, setting, inputElement) {
    const submitButtons = formElement.querySelectorAll(setting.submitButtonSelector);
    if ((hasInvalidInput(inputList))&&(inputElement.textContent === '')) {
        submitButtons.forEach( iti => {
            iti.classList.add('popup__submit-button_disabled');
            iti.setAttribute('disablet', true);
        })
    } else {
        submitButtons.forEach( iti => {
            iti.removeAttribute('disablet');
            iti.classList.remove('popup__submit-button_disabled');
        })
    }
};