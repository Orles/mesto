const popupImg = document.querySelector('.popup_imgs');
const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
const inputTitle = document.querySelector('.popup__input_title');
const inputLink = document.querySelector('.popup__input_link');
const picturePopupPlace = popupImg.querySelector('.popup__img');
const titlePopupPlace = popupImg.querySelector('.popup__subtitle');
const popupPlace = document.querySelector('.popup_place');

function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};


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

function createCard(imgUrl, title) {
    const element = elementTemplate.querySelector('.elements__element').cloneNode(true);
    const img = element.querySelector('.elements__mask-group');
    img.src = imgUrl;
    img.alt = title;
    element.querySelector('.elements__title').textContent = title;
    element.querySelector('.profile__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('profile__like_active');
    });
    element.querySelector('.elements__delete').addEventListener('click', function () {
        element.querySelector('.elements__delete').closest('.elements__element').remove();
    });
    element.querySelector('.elements__img-button').addEventListener('click', function() {
        openPopup(popupImg);
        picturePopupPlace.src = imgUrl;
        picturePopupPlace.alt = title;
        titlePopupPlace.textContent = title;
    });
    return element;
}

function addElement(evt) {
    evt.preventDefault();
    const card = createCard(inputLink.value, inputTitle.value);
    elements.prepend(card);
    inputTitle.value = '';
    inputLink.value = '';
    closePopup(popupPlace);
}

export {sheetCards, addElement, openPopup, closePopup};