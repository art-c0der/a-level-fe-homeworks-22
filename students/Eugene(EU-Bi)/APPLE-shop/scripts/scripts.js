const PRODUCTS = [
    {
        title: 'Apple TV Gen. 4',
        inStock: '31',
        price: '500',
        image: {
            filename:'https://i.ibb.co/g3qZWJr/image-2.png',
            alt:'Apple TV'
        },
        reviewPercents: '77%',
        ordersAmount:'527'
    },
    {
        title: 'iPhone 11 PRO Max',
        inStock: '0',
        price: '1100',
        image: {
            filename:'https://i.ibb.co/85zKDD9/image-3.png',
            alt:'iPhone 11 PRO Max'
        },
        reviewPercents: '95%',
        ordersAmount:'1,327'
    },
    {
        title: 'iPad PRO 13"',
        inStock: '85',
        price: '900',
        image: {
            filename:'https://i.ibb.co/W0cbPyM/image-4.png',
            alt:'iPad PRO 13'
        },
        reviewPercents: '87%',
        ordersAmount:'382'
    },
    {
        title: 'Apple Macbook Pro',
        inStock: '274',
        price: '1600',
        image: {
            filename:'https://i.ibb.co/9wdPzQP/image-5.png',
            alt:'Macbool PRO'
        },
        reviewPercents: '89%',
        ordersAmount:'485'
    },
    {
        title: 'AirPods Pro',
        inStock: '999',
        price: '299',
        image: {
            filename:'https://i.ibb.co/6J82PCj/image-6.png',
            alt:'iPods PRO'
        },
        reviewPercents: '65%',
        ordersAmount:'296'
    },
    {
        title: 'Apple Watch 4',
        inStock: '483',
        price: '599',
        image: {
            filename:'https://i.ibb.co/bH0nm8Q/image-7.png',
            alt:'Apple Watch 4'
        },
        reviewPercents: '91',
        ordersAmount:'560'
    }
];

const createCard = (object) => {
    const {title, inStock, price, image, reviewPercents, ordersAmount} = object;

    let stockIcon = new Image();
    stockIcon.src='https://i.ibb.co/2g2xRM6/Succ.png'

    const card = `<div class="card">
                    <img class="product__img" src="${image.filename}" alt="${image.alt}">
                    <p class="product__title">${title}</p>
                    <span class="stock">${inStock} left in stock</span>
                    <p class="price">Price: ${price}$</p>
                    <a href="#" class="button">Add to cart</a>
                        <div class="card-footer">
                            <div class="product-opinion">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99996 17.7917L8.79163 16.6917C4.49996 12.8 1.66663 10.2333 1.66663 7.08333C1.66663 4.51667 3.68329 2.5 6.24996 2.5C7.69996 2.5 9.09163 3.175 9.99996 4.24167C10.9083 3.175 12.3 2.5 13.75 2.5C16.3166 2.5 18.3333 4.51667 18.3333 7.08333C18.3333 10.2333 15.5 12.8 11.2083 16.7L9.99996 17.7917Z" fill="#F05454"/>
                                </svg>
                                    <span class="review">${reviewPercents} Positive reviews <br> Above average</span>
                                    <span class="orders">${ordersAmount}<br> orders</span>
                            </div>
                        </div>
                    </div>`;

    return card;
};

const generateContent = (array) => {
    const content = document.querySelector('#prodCard');

    content.innerHTML = '';

    let data = '';

    array.forEach((element) => {
        data += createCard(element);
    });

    if(!data) data = 'Error 404 Not found';
    content.innerHTML = data;
};

generateContent(PRODUCTS);