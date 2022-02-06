import PLUGINS from "./plugins.js";

const createCardContent = (object) => {
  const { headline, image } = object;

  const card = `<div class="card">
      <img class="card__img" src="${image.filename}" alt="${image.alt}">
      <p class="card__title">${headline}</p>
      </div>`;

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
  const { vstname, group } = filter;
  return data.filter((item) => {
    // true || false
    let result = true;

    if (vstname) {
      if (item.headline.toLowerCase().indexOf(vstname.toLowerCase()) === -1) {
        result = false;
      }
    }

    if (group) {
      if (item.group_type !== group) {
        result = false;
      }
    }

    return result;
  });
};
generateContent(PLUGINS);
document.forms.filtersForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData); // {group: STRING || UNDEFINED, name: STRING || UNDEFINED}

  const filteredData = filterData(PLUGINS, formProps);
  generateContent(filteredData);
});
const form = document.getElementById("form");
form.addEventListener("reset", () => {
  generateContent(PLUGINS);
});
