const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-20',
    headers: {
        authorization: 'f7ffe581-5207-41db-b3f5-5dadcd5e4cdf',
        'Content-Type': 'application/json'
    }
};

export const getNameAndSubtitle = (name, subtitle) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: subtitle
        })
    })
};

export const takeВataProfile = (name, subtitle, profileAvatar) => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            name.textContent = data.name;
            subtitle.textContent = data.about;
            profileAvatar.src = data.avatar;
        })
        .catch(err => console.log(err))
};

export const addCards = (create) => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            for (let item of data) {
                const element = create(item.link, item.name);
                    element.querySelector('.elements__score').textContent = item.likes.length;
                    element.dataset.id = item._id;
                    elements.prepend(element);
            };
        })
        .catch(err => console.log(err))
};

// .then(res => {
//     if (res.ok) {
//         return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
// });