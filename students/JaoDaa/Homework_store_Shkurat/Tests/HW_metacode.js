import ITEMS from './items';

const createItemHTML = (item) => {
  return `<div>${item.name} - os: ${item.os}</div>`;
};

const content = document.getElementById('content');

const data = ITEMS.reduce((acc, item)=>{
  acc += createItemHTML(item);
  return acc;
}, '');

content.innerHTML = data;
