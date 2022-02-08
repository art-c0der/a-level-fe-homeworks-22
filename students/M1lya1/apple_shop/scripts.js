import items from "./items.js";

const acc = document.getElementsByClassName("accordion");

let accord = Array.from(acc);

accord.forEach((element) => {
element.addEventListener('click', (e) => {
    element.classList.toggle("active");
    let panel = element.nextElementSibling;
    panel.classList.toggle("open");
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 150 + "px";
    } 
  });
});


const createCardContent = (object) => {
    const {name, imgUrl, price, orderInfo, id} = object;
    const card = ` <div class="card" data-id="${id}">
            <img class="card__image" src="${imgUrl}" alt="${name}">
            <p class="card__title">${name}</p>
            <p class="card__order">${orderInfo.inStock} left in stock</p>
            <p class="card__price">Price ${price} $</p>
            <button class="card__btn">Add to card</button>
            <div class="card__review">
            <p class="review">${orderInfo.reviews}% positive reviews</p>
            </div>
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





