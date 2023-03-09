import './index.css';
import {enableValidation} from './components/validate.js';
import {sheetCards, addElement, openPopup, closePopup} from './components/card.js';

const userName = document.querySelector('.popup__input_firstname');
const aboutMe = document.querySelector('.popup__input_about-me');
const name = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const popupProfile = document.querySelector('.popup_profile');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const popupPlace = document.querySelector('.popup_place');
const addButton = document.querySelector('.profile__add-button');
const formEditProfilePopup = document.querySelector('.popup__form_name');
const formPlace = document.querySelector('.popup__form_place');
const popups = document.querySelectorAll('.popup');

//закрытие на оверлей

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    });
});

//открытие popups

buttonOpenEditProfilePopup.addEventListener('click', function () {
    userName.value = name.textContent;
    aboutMe.value = subtitle.textContent;
    openPopup(popupProfile);
});

addButton.addEventListener('click', function () {
    openPopup(popupPlace);
});

//изменеие имени 

function submitEditProfilePopup(evt) {
    evt.preventDefault();
    name.textContent = userName.value;
    subtitle.textContent = aboutMe.value;
    closePopup(popupProfile);
}

formEditProfilePopup.addEventListener('submit', submitEditProfilePopup);

//6 карточек

sheetCards();

//добавление карточки

formPlace.addEventListener('submit', addElement);

//валидность 

enableValidation();