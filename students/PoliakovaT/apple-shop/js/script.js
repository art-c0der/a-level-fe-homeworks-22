import ITEMS from "./items.js";

const createCardContent = (object) => {
  const { imgUrl, name, price } = object;

  const card = `<div class="card">
    <img class="card__img" src="${imgUrl}">
    <p class="card__title">${name}</p>
    <p class="card__title">Price: ${price} $</p> 
    </div>`;
  return card;
};

const generateContent = (array) => {
  const content = document.querySelector("#content");

  content.innerHTML = "";

  let data = "";

  // const data = array.reduce((acc, element) => {
  //     acc += createCardContent(element);
  // }, '');

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

  // e.target.name.value
  // e.target.group.value

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData); // {group: STRING || UNDEFINED, name: STRING || UNDEFINED}

  const filteredData = filterData(ITEMS, formProps);
  generateContent(filteredData);
});
