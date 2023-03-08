// setting({
//     errorElement: formElement.querySelector(`.${inputElement.id}-error`),
//     inputList: Array.from(formElement.querySelectorAll('.popup__input')),
//     formList: Array.from(document.querySelectorAll('.popup__form')),
//     submitButtons: formElement.querySelectorAll('.popup__submit-button')
// });


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input-error');
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input-error');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
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

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            toggleButtonState(setting.inputList, formElement);
        });
    });
};

export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        setEventListeners(formElement);
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

function toggleButtonState(inputList, formElement) {
    const submitButtons = formElement.querySelectorAll('.popup__submit-button');
    if (hasInvalidInput(inputList)) {
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