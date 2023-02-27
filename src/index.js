import './index.css';
import {enableValidation} from './components/validate.js';
import {sheetCards, addElement, openPopup, closePopup} from './components/card.js';

const userName = document.querySelector('.popup__input_firstname');
const aboutMe = document.querySelector('.popup__input_about-me');
const name = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const popupProfile = document.querySelector('.popup_profile');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close');
const popupPlace = document.querySelector('.popup_place');
const addButton = document.querySelector('.profile__add-button');
const formEditProfilePopup = document.querySelector('.popup__form_name');
const formPlace = document.querySelector('.popup__form_place');
const popup = document.querySelectorAll('.popup');

//открытие и закрытие popup

buttonOpenEditProfilePopup.addEventListener('click', function () {
    userName.value = name.textContent;
    aboutMe.value = subtitle.textContent;
    openPopup(popupProfile);
});

closeButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        popup.forEach((items) => items.classList.remove('popup_opened'));
    });
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

//карточки

sheetCards();

//добавление карточки

formPlace.addEventListener('submit', addElement);

//валидность 

enableValidation();

// закрытие попапа на esc

document.addEventListener('keydown', (evt) => {
    if (evt.keycode === 'Escape') {
        popup.forEach( (items) => {
            items.classList.remove('popup_opened');
        });
    };
});