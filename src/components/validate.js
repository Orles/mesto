export const setting = {
    inputSelector: '.popup__input',
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__submit-button',
    inputErrorClass: 'popup__input-error',
    button_disabled: 'popup__submit-button_disabled'
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

    if ((!inputElement.validity.valid)) {
        showInputError(formElement, inputElement, inputElement.validationMessage, setting);
    } else {
        hideInputError(formElement, inputElement, setting);
    };
};

const setEventListeners = (formElement, setting) => {
    const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, setting);
            toggleButtonState(inputList, formElement, setting, evt);
        });
    });
};

export function enableValidation(setting) {
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

function toggleButtonState(inputList, formElement, setting, evt) {
    const submitButtons = formElement.querySelectorAll(setting.submitButtonSelector);
    if ((hasInvalidInput(inputList))) {
        submitButtons.forEach( iti => {
            iti.classList.add(setting.button_disabled);
            iti.setAttribute('disablet', true);
        })
    } else {
        submitButtons.forEach( iti => {
            iti.removeAttribute('disablet');
            iti.classList.remove(setting.button_disabled);
        })
    }
};