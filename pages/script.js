//открытие popup профиль

const popupProfile = document.querySelector('.popup_profile');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close');

function popupOpendProfile() {
    popupProfile.classList.add('popup_opened');
    return
};

editButton.addEventListener('click', popupOpendProfile);

function popupCloseProfile() {
    popupProfile.classList.remove('popup_opened');
    return
};

closeButton[0].addEventListener('click', popupCloseProfile);

//изменеие имени 

const form = document.querySelectorAll('.popup__form');
function forms(evt) {
    evt.preventDefault()
    const firstName = document.querySelector('.popup__input_firstname');
    const aboutMe = document.querySelector('.popup__input_about-me');
    const name = document.querySelector('.profile__name');
    const subtitle = document.querySelector('.profile__subtitle');
    if ((firstName.value === '') || (aboutMe.value === '')) {
        firstName.value = '';
        aboutMe.value = '';
        popupCloseProfile();
        return
    } else {
        name.textContent = firstName.value;
        subtitle.textContent = aboutMe.value;
        popupCloseProfile();
        return
    }
}

form[0].addEventListener('submit', forms);

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
function listCards() {
    for (let i = 0; i < initialCards.length; i++) {
        const elementTemplate = document.querySelector('#element').content;
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
        elements.prepend(element);
    };
};

//открытие popup место

const popupPlace = document.querySelector('.popup_place');
const addButton = document.querySelector('.profile__add-button');

function popupOpendPlace() {
    popupPlace.classList.add('popup_opened')
    return
};

addButton.addEventListener('click', popupOpendPlace);

function popupClosePlace() {
    popupPlace.classList.remove('popup_opened');
    return
}

closeButton[1].addEventListener('click', popupClosePlace);

//добавление карточки
function addElement(evt) {
    evt.preventDefault()
    const inputTitle = document.querySelector('.popup__input_title');
    const inputLink = document.querySelector('.popup__input_link');
    if ((inputTitle.value === '') || (inputLink.value === '')) {
        inputTitle.value = '';
        inputLink.value = '';
        popupClosePlace()
        return
    } else {
        const elementTemplate = document.querySelector('#element').content;
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
        popupClosePlace()
        return
    }
}

form[1].addEventListener('submit', addElement);

//лайк

const cards = document.querySelectorAll('.elements__element');

for (let i = 0; i < cards.length; i++) {
    cards[i].querySelector('.profile__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('profile__like_active');
    });
};

//удаление карточки

const deleteButton = document.querySelectorAll('.elements__delete');
for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function () {
        const listItem = deleteButton[i].closest('.elements__element');
        listItem.remove();
    });
};

//функция для 6 карточек

listCards()

//просмотр картинки

const popupImg = document.querySelector('.popup_imgs');
const imgButton = document.querySelectorAll('.elements__img-button');
const imgAll = document.querySelectorAll('.elements__mask-group');
const title = document.querySelectorAll('.elements__title');
for (let i = 0; i < imgAll.length; i++) {
    imgButton[i].addEventListener('click', function () {
        popupImg.classList.add('popup_opened');
        popupImg.querySelector('.popup__img').src = imgAll[i].src;
        popupImg.querySelector('.popup__img').alt = imgAll[i].alt;
        popupImg.querySelector('.popup__subtitle').textContent = title[i].textContent;
    });
};

closeButton[2].addEventListener('click', function () {
    popupImg.classList.remove('popup_opened');
});