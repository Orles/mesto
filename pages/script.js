const userName = document.querySelector('.popup__input_firstname');
const aboutMe = document.querySelector('.popup__input_about-me');
const name = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const elementTemplate = document.querySelector('#element').content;
const inputTitle = document.querySelector('.popup__input_title');
const inputLink = document.querySelector('.popup__input_link');
const popupProfile = document.querySelector('.popup_profile');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close');
const popupImg = document.querySelector('.popup_imgs');
const imgButton = document.querySelectorAll('.elements__img-button');
const imgAll = document.querySelectorAll('.elements__mask-group');
const title = document.querySelectorAll('.elements__title');
const popupPlace = document.querySelector('.popup_place');
const addButton = document.querySelector('.profile__add-button');
const formEditProfilePopup = document.querySelector('.popup__form_name');
const formPlace = document.querySelector('.popup__form_place');
const popup = document.querySelectorAll('.popup');
const buttonsDeletingCard = document.querySelectorAll('.elements__delete');
const picture = document.querySelectorAll('.elements__mask-group');
const elementTitle = element.querySelectorAll('.elements__title');

//открытие и закрытие popup

function openPopup(popup) {
    popup.classList.add('popup_opened');
};

buttonOpenEditProfilePopup.addEventListener('click', function () {
    userName.value = name.textContent;
    aboutMe.value = subtitle.textContent;
    openPopup(popupProfile);
});

function closePopup(popup) {
    popup.classList.remove('popup_opened')
};

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
    return
}

formEditProfilePopup.addEventListener('submit', submitEditProfilePopup);

//карточки

const elements = document.querySelector('.elements');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
function sheetCards() {
    for (let i = 0; i < initialCards.length; i++) {
        const card = createCard(initialCards[i].link, initialCards[i].name);
        elements.prepend(card);
    };
};

//добавление карточки

function addElement(evt) {
    evt.preventDefault();
    const card = createCard(inputLink.value, inputTitle.value);
    elements.prepend(card);
    inputTitle.value = '';
    inputLink.value = '';
    closePopup(popupPlace);
    return
}

function createCard(imgUrl, title) {
    const element = elementTemplate.querySelector('.elements__element').cloneNode(true);
    element.querySelector('.elements__mask-group').src = imgUrl;
    element.querySelector('.elements__mask-group').alt = title;
    element.querySelector('.elements__title').textContent = title;
    element.querySelector('.profile__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('profile__like_active');
    });
    element.querySelector('.elements__delete').addEventListener('click', function () {
        element.querySelector('.elements__delete').closest('.elements__element').remove();
    });
    element.querySelector('.elements__img-button').addEventListener('click', function() {
        openPopup(popupImg);
        popupImg.querySelector('.popup__img').src = imgUrl;
        popupImg.querySelector('.popup__img').alt = title;
        popupImg.querySelector('.popup__subtitle').textContent = title;
    });
    return element;
};

formPlace.addEventListener('submit', addElement);

sheetCards();