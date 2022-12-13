const firstName = document.querySelector('.popup__input_firstname');
const aboutMe = document.querySelector('.popup__input_about-me');
const name = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const elementTemplate = document.querySelector('#element').content;
const inputTitle = document.querySelector('.popup__input_title');
const inputLink = document.querySelector('.popup__input_link');
const popupProfile = document.querySelector('.popup_profile');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close');
const popupImg = document.querySelector('.popup_imgs');
const imgButton = document.querySelectorAll('.elements__img-button');
const imgAll = document.querySelectorAll('.elements__mask-group');
const title = document.querySelectorAll('.elements__title');
const popupPlace = document.querySelector('.popup_place');
const addButton = document.querySelector('.profile__add-button');
const formName = document.querySelector('.popup__form_name');
const formPlace = document.querySelector('.popup__form_place');
const popup = document.querySelectorAll('.popup');

firstName.value = name.textContent;
aboutMe.value = subtitle.textContent;

//открытие popup профиль

function popupOpen(popup) {
    popup.classList.add('popup_opened');
};

editButton.addEventListener('click', function () {
    popupOpen(popupProfile);
});

function closePopup(popup) {
    popup.classList.remove('popup_opened')
};

closeButton.forEach(function(item) {
    item.addEventListener('click', function() {
        popup.forEach((items) => items.classList.remove('popup_opened'));
    });
});

//изменеие имени 

function forms(evt) {
    evt.preventDefault()
    name.textContent = firstName.value;
    subtitle.textContent = aboutMe.value;
    popup.forEach((items) => items.classList.remove('popup_opened'));
    return
}

formName.addEventListener('submit', forms);

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
function creatCards() {
    for (let i = 0; i < initialCards.length; i++) {
        const element = elementTemplate.querySelector('.elements__element').cloneNode(true);
        element.querySelector('.elements__mask-group').src = initialCards[i].link;
        element.querySelector('.elements__mask-group').alt = initialCards[i].name;
        element.querySelector('.elements__title').textContent = initialCards[i].name;
        element.querySelector('.profile__like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('profile__like_active');
        });
        element.querySelector('.elements__delete').addEventListener('click', function () {
            element.querySelector('.elements__delete').closest('.elements__element').remove();
        });
        element.querySelector('.elements__img-button').addEventListener('click', function () {
            popupImg.classList.add('popup_opened');
            popupImg.querySelector('.popup__img').src = element.querySelector('.elements__mask-group').src;
            popupImg.querySelector('.popup__img').alt = element.querySelector('.elements__mask-group').alt;
            popupImg.querySelector('.popup__subtitle').textContent = element.querySelector('.elements__title').textContent;
        });
        elements.prepend(element);
    };
};

//открытие popup место

addButton.addEventListener('click', function () {
    popupOpen(popupPlace);
});
//добавление карточки

function addElement(evt) {
    evt.preventDefault()
    const element = elementTemplate.querySelector('.elements__element').cloneNode(true);
    element.querySelector('.elements__mask-group').src = inputLink.value;
    element.querySelector('.elements__mask-group').alt = inputTitle
    element.querySelector('.elements__title').textContent = inputTitle.value;
    element.querySelector('.profile__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('profile__like_active');
    });
    element.querySelector('.elements__delete').addEventListener('click', function () {
        element.querySelector('.elements__delete').closest('.elements__element').remove();
    });
    element.querySelector('.elements__img-button').addEventListener('click', function () {
        popupImg.classList.add('popup_opened');
        popupImg.querySelector('.popup__img').src = element.querySelector('.elements__mask-group').src;
        popupImg.querySelector('.popup__img').alt = element.querySelector('.elements__mask-group').alt;
        popupImg.querySelector('.popup__subtitle').textContent = element.querySelector('.elements__title').textContent;
    });
    elements.prepend(element);
    inputTitle.value = '';
    inputLink.value = '';
    popup.forEach((items) => items.classList.remove('popup_opened'));
    return
}

formPlace.addEventListener('submit', addElement);

//функция для 6 карточек

creatCards();