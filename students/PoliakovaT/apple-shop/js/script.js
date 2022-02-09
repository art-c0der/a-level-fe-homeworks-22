import ITEMS from "./items.js";

const createCardContent = (object) => {
  const { name, imgUrl, price, orderInfo } = object;

  const card = `<div class="card">
    <img class="card__img" src="${imgUrl}" alt="${name}">
    <img id="like_empty" src="./img/icons/like_empty1.png" />
    <p class="card__title">${name}</p>
    <p class="card__order"><img id="check" src="./img/icons/check2.svg" />${orderInfo.inStock} <span>left in stock</span></p>
          <p class="card__price"><span>Price </span>${price}<span> $<span></p>
          <button class="card__btn">Add to card</button>
          <div class="card__review">
          <img id="hart" src="./img/icons/hart.svg" />
          <p class="review">${orderInfo.reviews}% <span>positive reviews<br>Above avarage</span></p>
          <p>${orderInfo.inStock}<span><br>orders</span></p>
          </div>
      </div>
  `;
  return card;
};

const generateContent = (array) => {
  const content = document.querySelector("#content");

  content.innerHTML = "";

  let data = "";

  array.forEach((element) => {
    data += createCardContent(element);
  });

  if (!data) data = "No data";

  content.innerHTML = data;
};

const filterData = (data, filter) => {
  let { name } = filter;
  return data.filter((item) => {
    let result = true;
    if (name) {
      if (item.name.toLowerCase().indexOf(name.toLowerCase()) === -1) {
        result = false;
      }
    }

    return result;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading").hidden = "true";

    generateContent(ITEMS);
  }, 500);
});

document.forms.filtersForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData); // {group: STRING || UNDEFINED, name: STRING || UNDEFINED}

  const filteredData = filterData(ITEMS, formProps);
  generateContent(filteredData);
});
