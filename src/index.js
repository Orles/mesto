import './index.css';
import {enableValidation, setting, addCards} from './components/validate.js';
import {addElement, openPopup, closePopup, sheetCards} from './components/card.js';
import {getNameAndSubtitle, takeВataProfile} from './components/api.js';

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
const popupSubmitButtons = document.querySelectorAll('.popup__submit-button');
const profileAvatar = document.querySelector('.profile__avatar');

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
    popupSubmitButtons.forEach((iti) => {
        iti.classList.add('popup__submit-button_disabled');
        iti.setAttribute('disabled', true);
    })
});

//изменеие имени 

function submitEditProfilePopup(evt) {
    evt.preventDefault();
    name.textContent = userName.value;
    subtitle.textContent = aboutMe.value;
    getNameAndSubtitle(name.textContent, subtitle.textContent)
    closePopup(popupProfile);
}

formEditProfilePopup.addEventListener('submit', submitEditProfilePopup);

//6 карточек

sheetCards(addCards);

//добавление карточки

formPlace.addEventListener('submit', addElement);

//валидность 

enableValidation(setting);

// Загрузка информации о пользователе с сервера

takeВataProfile(name, subtitle, profileAvatar);

  // Редактирование профиля