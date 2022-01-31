const PRODUCTS = [
  {
    title: "Apple TV Gen. 4",
    inStock: {
      value: "31",
      pict: {
        succ: "https://i.ibb.co/3pPhHwc/yes.png",
        err: "https://i.ibb.co/1vzQDKt/no.png",
      },
    },
    price: "500",
    image: {
      filename: "https://i.ibb.co/g3qZWJr/image-2.png",
      alt: "Apple TV",
    },
    reviewPercents: "77%",
    ordersAmount: "527",
  },
  {
    title: "iPhone 11 PRO Max",
    inStock: {
      value: "0",
      pict: {
        succ: "https://i.ibb.co/3pPhHwc/yes.png",
        err: "https://i.ibb.co/1vzQDKt/no.png",
      },
    },
    price: "1100",
    image: {
      filename: "https://i.ibb.co/85zKDD9/image-3.png",
      alt: "iPhone 11 PRO Max",
    },
    reviewPercents: "95%",
    ordersAmount: "1,327",
  },
  {
    title: 'iPad PRO 13"',
    inStock: {
      value: "85",
      pict: {
        succ: "https://i.ibb.co/3pPhHwc/yes.png",
        err: "https://i.ibb.co/1vzQDKt/no.png",
      },
    },
    price: "900",
    image: {
      filename: "https://i.ibb.co/W0cbPyM/image-4.png",
      alt: "iPad PRO 13",
    },
    reviewPercents: "87%",
    ordersAmount: "382",
  },
  {
    title: "Apple Macbook Pro",
    inStock: {
      value: "274",
      pict: {
        succ: "https://i.ibb.co/3pPhHwc/yes.png",
        err: "https://i.ibb.co/1vzQDKt/no.png",
      },
    },
    price: "1600",
    image: {
      filename: "https://i.ibb.co/9wdPzQP/image-5.png",
      alt: "Macbool PRO",
    },
    reviewPercents: "89%",
    ordersAmount: "485",
  },
  {
    title: "AirPods Pro",
    inStock: {
      value: "999",
      pict: {
        succ: "https://i.ibb.co/3pPhHwc/yes.png",
        err: "https://i.ibb.co/1vzQDKt/no.png",
      },
    },
    price: "299",
    image: {
      filename: "https://i.ibb.co/6J82PCj/image-6.png",
      alt: "iPods PRO",
    },
    reviewPercents: "65%",
    ordersAmount: "296",
  },
  {
    title: "Apple Watch 4",
    inStock: {
      value: "483",
      pict: {
        succ: "https://i.ibb.co/3pPhHwc/yes.png",
        err: "https://i.ibb.co/1vzQDKt/no.png",
      },
    },
    price: "599",
    image: {
      filename: "https://i.ibb.co/bH0nm8Q/image-7.png",
      alt: "Apple Watch 4",
    },
    reviewPercents: "91",
    ordersAmount: "560",
  },
];

const createCard = (object) => {
  const { title, inStock, price, image, reviewPercents, ordersAmount } = object;

  const card = `<div class="card" onselectstart="return false" onmousedown="return false">
    
    <input type="checkbox"  id="id" class="like">
    <img class="product__img" src="${image.filename}" alt="${image.alt}">
    <p class="product__title">${title}</p>
    <span class="stock" id="inStock"><img src="${inStock.pict}"><p class="space">' '</p><p class="bold">${inStock.value}</p><p class="space">''</p>left in stock</span>
    <span class="price">Price: <p class="bold">${price}</p> $</span>
    <a href="#" class="${inStock.class}">Add to cart</a>
    <div class="card-footer">
    <div class="product-opinion">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99996 17.7917L8.79163 16.6917C4.49996 12.8 1.66663 10.2333 1.66663 7.08333C1.66663 4.51667 3.68329 2.5 6.24996 2.5C7.69996 2.5 9.09163 3.175 9.99996 4.24167C10.9083 3.175 12.3 2.5 13.75 2.5C16.3166 2.5 18.3333 4.51667 18.3333 7.08333C18.3333 10.2333 15.5 12.8 11.2083 16.7L9.99996 17.7917Z" fill="#F05454"/>
    </svg>
    <span class="review"><p class="bold">${reviewPercents}</p> Positive reviews <br> Above average</span>
    <span class="orders"><p class="bold">${ordersAmount}</p><br> orders</span>
</div>
    
    </div>
    </div>`;
  return card;
};

const generateContent = (array) => {
  const content = document.querySelector("#prodCard");

  content.innerHTML = "";

  let data = "";

  array.forEach((element) => {
    data += createCard(element);
  });

  if (!data) data = "Error 404 Not found";
  content.innerHTML = data;
};

const filterUnAvalaib = PRODUCTS.reduce((arr, item) => {
  if (item.inStock.value < 1) {
    item.inStock.pict = item.inStock.pict.err;
    item.inStock.class = "unAvalaib";
  } else {
    item.inStock.pict = item.inStock.pict.succ;
    item.inStock.class = "button";
  }
  arr.push(item);
  return arr;
}, []);
generateContent(filterUnAvalaib);

let elem = document.getElementsByClassName("like");
for (let i = 0; i < elem.length; i++) {
  let newId = "id_" + i;
  let newIdsvg = "id" + i;
  elem[i].outerHTML =
    '<input type="checkbox" id="' +
    newId +
    '" class="like"> <label id="heart" for="' +
    newId +
    '" class="heartLabe"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="' +
    newIdsvg +
    '" class="heartSvg" fill="none" d="M9.12834 16.3219L9.12762 16.3213C6.97172 14.3663 5.22284 12.7794 4.0069 11.2928C2.7967 9.81324 2.16675 8.49409 2.16675 7.08333C2.16675 4.79281 3.95956 3 6.25008 3C7.54869 3 8.80287 3.60697 9.61941 4.56584L10.0001 5.01287L10.3808 4.56584C11.1973 3.60697 12.4515 3 13.7501 3C16.0406 3 17.8334 4.79281 17.8334 7.08333C17.8334 8.4941 17.2035 9.81327 15.9932 11.294C14.7782 12.7804 13.0314 14.3678 10.8782 16.3245L10.8732 16.329L10.8722 16.33L10.0014 17.1167L9.12834 16.3219Z" stroke="black"/></svg></label>';
}
