import items from "./items.js";

const acc = document.getElementsByClassName("accordion");

let accord = Array.from(acc);

accord.forEach((element) => {
element.addEventListener('click', (e) => {
    element.classList.toggle("active");
    let panel = element.nextElementSibling;
    if (panel.style.display === "flex") {
        panel.style.display = "none";
      } 
      else {
        panel.style.display = "flex";
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



const createModal = (modalObject) => {
    const {name, imgUrl, color, size, chip, os, price, orderInfo} = modalObject;
    const modal = ` 
            <div class="overlay"></div>
            <div class="modal"> 
             <div class="modal__image">
             <img  src="${imgUrl}" alt="${name}">
             </div>
             <h2 class="modal__title">${name}</h2>
            <div class="modal__info">
            <div class="modal__review">
            <p class="modal__review--text">${orderInfo.reviews}% positive reviews</p>
            </div>
            <p class="modal__text">Color: <span class="modal__bold">${color}</span></p>
            <p class="modal__text">Operating System: <span class="modal__bold">${os}</span></p>
            <p class="modal__text">Chip: <span class="modal__bold">${chip.name}</span></p>
            <p class="modal__text">Height: <span class="modal__bold">${size.height} cm</span></p>
            <p class="modal__text">Width: <span class="modal__bold">${size.width} cm</span></p>
            <p class="modal__text">Depth <span class="modal__bold">${size.depth} cm</span></p>
            <p class="modal__text">Weight: <span class="modal__bold">${size.weight} kg</span></p>
            <div class="modal__block">
            <p class="modal__price">$ ${price}</p>
            <p class="modal__order">${orderInfo.inStock} left in stock</p>
            <button class="modal__btn">Add to card</button>
            </div>
            </div>
    </div>
    
    `;
    return modal;
};

const generateModalPage = (arr) => {
    const modalCard = document.querySelector('.modal__window');
   
    let dat = '';
    arr.forEach((element) => {
        
      dat = createModal(element);
    });
  
    modalCard.innerHTML = dat;
} 




document.addEventListener('DOMContentLoaded', () => {
            generateContent(items);
            const cards = document.querySelectorAll(".card");

        const cardsArray = Array.from(cards);
        cardsArray.forEach((card) => card.addEventListener('click', (e) => {
            const cardId = e.currentTarget.dataset.id;
            
            const filteredArray = items.filter((item) => item.id == cardId );
            
            const open = document.querySelector(".modal__window");
            open.style.display = "block";
            
            generateModalPage(filteredArray); 
            
            const close = document.querySelector(".overlay");

    close.addEventListener('click', (event) => {
    open.style.display = "none";
    
        });
    }));
});

