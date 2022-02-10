import PRODUCTS from "./products.js";
//--------Aside display------------
let searchIcon = document.getElementById("search-icon");
let searchMenu = document.getElementById("aside__menu");
searchIcon.addEventListener("click", (e) => {
  searchMenu.classList.toggle("visible");
});
//-------- Slider ------------
document.addEventListener("DOMContentLoaded", function () {
  var slider = new SimpleAdaptiveSlider(".slider", {
    loop: true,
    autoplay: true,
    interval: 10000,
    swipe: true,
  });
});
//-------- Accordion ------------
const accordeonMenu = document.getElementsByClassName("accordion");
const accMenuArr = Array.from(accordeonMenu);
accMenuArr.forEach((item) => {
  item.addEventListener("click", (e) => {
    let panel = item.nextElementSibling;
    let arrow = item.children[0];
    panel.classList.toggle("active");
    arrow.classList.toggle("rotate");
    item.classList.toggle("open");
  });
});
//-------- Create Card HTML------------
const createCard = (object) => {
  const { id, name, orderInfo, price, imgUrl } = object;
  const card = `
  <div class="card" id="${id}">  
    <input type="checkbox"  id="id_${id}" class="like">
    <label id="heart" class="heart" for="id_${id}" class="heartLabe"> 
      <svg class="heartSvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="id_${id}id" class="heartSvg" fill="none" d="M9.12834 16.3219L9.12762 16.3213C6.97172 14.3663 5.22284 12.7794 4.0069 11.2928C2.7967 9.81324 2.16675 8.49409 2.16675 7.08333C2.16675 4.79281 3.95956 3 6.25008 3C7.54869 3 8.80287 3.60697 9.61941 4.56584L10.0001 5.01287L10.3808 4.56584C11.1973 3.60697 12.4515 3 13.7501 3C16.0406 3 17.8334 4.79281 17.8334 7.08333C17.8334 8.4941 17.2035 9.81327 15.9932 11.294C14.7782 12.7804 13.0314 14.3678 10.8782 16.3245L10.8732 16.329L10.8722 16.33L10.0014 17.1167L9.12834 16.3219Z" stroke="black"/>
      </svg>
    </label>
    <div class="product__img"><img src="${imgUrl}"></div>
    <p class="product__title">${name}</p>
    <span class="stock" id="inStock"><img src="${orderInfo.inStock.pict}"><p class="space">' '</p><p class="bold">${orderInfo.inStock.value}</p><p class="space">''</p>left in stock</span>
    <span class="price">Price: <p class="bold">${price}</p> $</span>
    <a href="#" class="${orderInfo.inStock.class}">Add to cart</a>
    <div class="card-footer">
      <div class="product-opinion">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99996 17.7917L8.79163 16.6917C4.49996 12.8 1.66663 10.2333 1.66663 7.08333C1.66663 4.51667 3.68329 2.5 6.24996 2.5C7.69996 2.5 9.09163 3.175 9.99996 4.24167C10.9083 3.175 12.3 2.5 13.75 2.5C16.3166 2.5 18.3333 4.51667 18.3333 7.08333C18.3333 10.2333 15.5 12.8 11.2083 16.7L9.99996 17.7917Z" fill="#F05454"/>
        </svg>
        <span class="review"><p class="bold">${orderInfo.reviews}%</p> Positive reviews <br> Above average</span>
        <span class="orders"><p class="bold">${orderInfo.amount}</p><br> orders</span>
      </div>
    </div>
  </div>`;
  return card;
};
//--------Generate Content from array ------------
const generateContent = (array) => {
  const content = document.querySelector("#prodCard");
  content.innerHTML = "";
  const data = array.reduce((acc, item) => {
    acc += createCard(item);
    return acc;
  }, "");
  if (!data) data = "Error 404 Not found";
  content.innerHTML = data;
};
//-------- Filter unAvalaible------------
const filterUnAvalaib = PRODUCTS.reduce((arr, item) => {
  if (item.orderInfo.inStock.value < 1) {
    item.orderInfo.inStock.pict = item.orderInfo.inStock.pict.err;
    item.orderInfo.inStock.class = "unAvalaib";
  } else {
    item.orderInfo.inStock.pict = item.orderInfo.inStock.pict.succ;
    item.orderInfo.inStock.class = "button";
  }
  arr.push(item);
  return arr;
}, []);
generateContent(filterUnAvalaib);
//---- Like color changing-----Open and closing modal window------
let modal = document.getElementById("myModal");
const cardData = document.getElementsByClassName("card");
const cardsArray = Array.from(cardData);
cardsArray.forEach((card) => {
  //-------- Like color changing------------
  card.children[0].addEventListener("click", (e) => {
    let inpId = e.target.id + "id";
    let pathFill = document.getElementById(inpId);
    pathFill.classList.toggle("heartFill");
  });
  //--------Open modal window ------------
  card.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("button") ||
      e.target.classList.contains("like") ||
      e.target.classList.contains("heartSvg") ||
      e.target.classList.contains("heartFill")
    ) {
      e.stopPropagation();
    } else {
      modal.classList.toggle("close");
    }
  });
});
//---- closing modal window------
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.toggle("close");
  }
});
//-----------------------GENERATE MODAL--------------------------------------------------------------
const createModalCard = (object) => {
  const { name, orderInfo, price, imgUrl, color, os, chip, size } = object;
  const modalCard = `<div class="modalCard">
    <div class="modal__img"><img src="${imgUrl}"></div>
    <div class="centralBlock">
      <p class="product__title">${name}</p>
      <div class="card-footer">
        <div class="product-opinion">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99996 17.7917L8.79163 16.6917C4.49996 12.8 1.66663 10.2333 1.66663 7.08333C1.66663 4.51667 3.68329 2.5 6.24996 2.5C7.69996 2.5 9.09163 3.175 9.99996 4.24167C10.9083 3.175 12.3 2.5 13.75 2.5C16.3166 2.5 18.3333 4.51667 18.3333 7.08333C18.3333 10.2333 15.5 12.8 11.2083 16.7L9.99996 17.7917Z" fill="#F05454"/>
          </svg>
          <span class="review"><p class="bold">${orderInfo.reviews}%</p> Positive reviews <br> Above average</span>
          <span class="orders"><p class="bold">${orderInfo.amount}</p><br> orders</span>
        </div>
      </div>
      <div class="modalProductInfo">
        <span>Color: <p class="bold">${color}</p></span>
        <span>Operating system: <p class="bold">${os}</p></span>
        <span>Chip: <p class="bold">${chip.name}</p></span>
        <span>Height: <p class="bold">${size.height}</p></span>
        <span>Width: <p class="bold">${size.width}</p></span>
        <span>Depth: <p class="bold">${size.depth}</p></span>
        <span>Weight: <p class="bold">${size.weight}</p></span>
      </div>
    </div>
    <div class="modalPricePlace">
      <span class="modalPrice"><p class="bold">$${price}</p></span>
      <span class="modalStock" id="inStock"><img src="${orderInfo.inStock.pict}"><p class="space">' '</p>Stock: <p class="bold">${orderInfo.inStock.value}</p><p class="space">''</p>pcs.</span>
      <a href="#" class="${orderInfo.inStock.class} + modalButton">Add to cart</a>
    </div>
  </div>`;
  return modalCard;
};
//-------- generate Modal Content in click ------------
const generateModalContent = (array) => {
  const content = document.querySelector("#modal");
  let data = "";
  content.innerHTML = "";
  cardsArray.forEach((card) => {
    card.addEventListener("click", (e) => {
      let itemId = "";
      itemId = e.currentTarget.id;
      array.forEach((el) => {
        if (el.id == itemId) {
          data = createModalCard(el);
        }
      });
      if (!data) data = "Error 404 Not found";
      content.innerHTML = data;
    });
  });
};
generateModalContent(filterUnAvalaib);
