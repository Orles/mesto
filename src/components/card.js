const popupImg = document.querySelector('.popup_imgs');
const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
const inputTitle = document.querySelector('.popup__input_title');
const inputLink = document.querySelector('.popup__input_link');
const picturePopupPlace = popupImg.querySelector('.popup__img');
const titlePopupPlace = popupImg.querySelector('.popup__subtitle');
const popupPlace = document.querySelector('.popup_place');

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    };
};

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
};

function sheetCards(add) {
    if (add) {
        add(createCard);
    };
};

function createCard(imgUrl, title, deleteCards) {
    const element = elementTemplate.querySelector('.elements__element').cloneNode(true);
    const img = element.querySelector('.elements__mask-group');
    img.src = imgUrl;
    img.alt = title;
    element.querySelector('.elements__title').textContent = title;
    element.querySelector('.profile__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('profile__like_active');
    });
    element.querySelector('.elements__img-button').addEventListener('click', function () {
        openPopup(popupImg);
        picturePopupPlace.src = imgUrl;
        picturePopupPlace.alt = title;
        titlePopupPlace.textContent = title;
    });
    if (deleteCards) {
        deleteCards(element);
    };
    return element;
};



function deleteElementsDelete(element) {
    element.querySelector('.elements__delete').classList.remove('elements__delete_none');
    element.querySelector('.elements__delete').addEventListener('click', function () {
        element.querySelector('.elements__delete').closest('.elements__element').remove();
        fetch(`https://nomoreparties.co/v1/plus-cohort-20/cards/${element.dataset.id}`, {
            method: 'DELETE',
            headers: {
                authorization: 'f7ffe581-5207-41db-b3f5-5dadcd5e4cdf',
            },
        })
    });
};

function addElement(evt) {
    evt.preventDefault();
    let card = createCard(inputLink.value, inputTitle.value, deleteElementsDelete);
    elements.prepend(card);
    fetch('https://nomoreparties.co/v1/plus-cohort-20/cards', {
        method: 'POST',
        headers: {
            authorization: 'f7ffe581-5207-41db-b3f5-5dadcd5e4cdf',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inputTitle.value,
            link: inputLink.value
        })
    });
    inputTitle.value = '';
    inputLink.value = '';
    closePopup(popupPlace);
}

export { addElement, openPopup, closePopup, sheetCards };