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
   
    if (!inputElement.validity.valid) {
        if ((inputElement.type === 'text')&&(inputElement.validity.patternMismatch)) {
            inputElement.setCustomValidity(inputElement.dataset.error); //Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы.
        } else {
            inputElement.setCustomValidity("");
        };
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
        });
    });
};

export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      setEventListeners(formElement);
    });
};