import items from './items.js';

const createCardContent = (object) => {
    const {imgUrl, name, price,orderInfo} = object;

    const card = `<div class ="card">
    <button class="btn"></button>
    <img class= "image" src="${imgUrl}" alt="${imgUrl}">
    <p class="title">${name}</p>
    <p class="inStock">${orderInfo.inStock} left in stock</p>
    <p class="price">Price: ${price} $</p>
    <button class="button">Add to cart</button>
    <p class="reviews">${orderInfo.reviews}</p>
    </div>
    `;
    return card;
};

const generateContent = (array) => {
    const content = document.querySelector('#content');

content.innerHTML = '';

let data = '';

array.forEach((element) => {
data += createCardContent(element);
});

if (!data) data = 'No data';

content.innerHTML = data;
};

generateContent(items);