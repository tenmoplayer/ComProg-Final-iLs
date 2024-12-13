
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('#hotcoffee');
let listCard = document.querySelector('.listCard');
let coldList = document.querySelector('#coldcoffee');
let frappelist = document.querySelector('#frappes');
let italianlist = document.querySelector('#italian');
let pastrieslist = document.querySelector('#pastries');
let pastalist = document.querySelector('#pasta');
let sandwichlist = document.querySelector('#sandwich');
let croffleslist = document.querySelector('#croffles');
let pcroffleslist = document.querySelector('#pcroffles');
let ricemealist = document.querySelector('#ricemea');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id: 1,
        name: 'Espresso',
        image: 'ESPRESSO.png',
        price: 85,
        stock: 13
    },
    {
        id: 2,
        name: 'Green Coffee',
        image: 'GREEN COFFEE.png',
        price: 85,
        stock: 12
    },
    {
        id: 3,
        name: 'Double Espresso',
        image: 'DOUBLE ESPRESSO.png',
        price: 95, stock: 10
    },
    {
        id: 4,
        name: 'Cafe Americano',
        image: 'CAFE AMERICANO.png',
        price: 90, stock: 7
    },
    {
        id: 5,
        name: 'Cafe Latte',
        image: 'CAFE LATTE.png',
        price: 100, stock: 7
    },
    {
        id: 6,
        name: 'Cappuccino',
        image: 'CAPPUCCINO.png',
        seller: 'bestseller.png',
        price: 100, stock: 2
    },
    {
        id: 7,
        name: 'Mocha Latte',
        image: 'MOCHA LATTE (2).png',
        price: 100,
        seller: 'bestseller.png', stock: 3
    },
    {
        id: 8,
        name: 'Caramel Macchiato',
        image: 'CARAMEL MACCHIATO.png',
        price: 100, stock: 13
    },
    {
        id: 9,
        name: 'Matcha Latte',
        image: 'MATCHA LATTE (1).png',
        price: 100, stock: 13
    },
    {
        id: 10,
        name: 'Spanish Latte',
        image: 'SPANISH LATTE.png',
        price: 100, stock: 14
    },
    {
        id: 11,
        name: 'Hot Bellagio Chocolate',
        image: 'HOT BELLAGIO CHOCOLATE.png',
        price: 100, stock: 21
    },
    
];

// Cold Coffee Products Array
let coldCoffeeProducts = [
    {
        id: 12,
        name: 'Cafe Americano',
        image: 'Cafe Americano (1).png',
        price: 120, stock: 15
    },
    {
        id: 13,
        name: 'Cafe Latte',
        image: 'Cafe Latte (1).png',
        price: 130, stock: 8
    },
    {
        id: 14,
        name: 'Caramel Macchiato',
        image: 'Caramel Macchiato (1).png',
        price: 130, stock: 17
    },
    {
        id: 15,
        name: 'English Toffee',
        image: 'English Toffee.png',
        price: 130, stock: 11
    },
    {
        id: 16,
        name: 'Hazelnut',
        image: 'Hazelnut.png',
        price: 130, stock: 12
    },    
    {
        id: 17,
        name: 'Macadamia',
        image: 'Macadamia.png',
        price: 130, stock: 12
    },    
    {
        id: 18,
        name: 'Matcha Caramel',
        image: 'Matcha Caramel.png',
        price: 130, stock: 23
    },    
    {
        id: 19,
        name: 'Mocha Latte',
        image: 'Mocha Latte (3).png',
        price: 130, stock: 12
    },    
    {
        id: 20,
        name: 'Roasted Almond',
        image: 'Roasted Almond.png',
        price: 140, stock: 12
    },    
    {
        id: 21,
        name: 'Spanish Latte',
        image: 'Spanish Latte (1).png',
        price: 185, stock: 17
    }
];
let frappesProducts = [
    {
        id: 22,
        name: 'Butterscotch',
        image: 'Butterscotch.png',
        price: 120, stock: 9
    },    
    {
        id: 23,
        name: 'Cookies & Cream',
        image: 'Cookies & Cream.png',
        price: 185, stock: 8
    },    
    {
        id: 24,
        name: 'Double Chocolate',
        image: 'Double Chocolate.png',
        price: 185, stock: 5
    },    
    {
        id: 25,
        name: 'Matcha',
        image: 'Matcha (1).png',
        price: 185, stock: 7
    },    
    {
        id: 26,
        name: 'Mocha',
        image: 'Mocha (1).png',
        price: 185, stock: 4
    },    
    {
        id: 27,
        name: 'Mocha Crumble',
        image: 'Mocha Crumble (1).png',
        price: 185, stock: 11
    },    
    {
        id: 28,
        name: 'Salted Caramel',
        image: 'Salted Caramel (1).png',
        price: 185, stock: 12
    },    
    {
        id: 29,
        image: 'Strawberry.png',
        name: 'Strawberry',
        price: 185, stock: 17
    },    
    {
        id: 30,
        name: 'Vanilla Bean Hazelnut',
        image: 'Vanilla Bean Hazelnut .png',
        price: 185, stock: 12
    }

    
]

let italianProducts = [
    {
        id: 31,
        name: 'Green Apple Campagne',
        image: 'GREEN APPLE CAMPAGNE.png',
        price: 120, stock: 13
    },    
    {
        id: 32,
        name: 'Minty Peach',
        image: 'MINTY PEACH.png',
        price: 185, stock: 18
    }
    ,    
    {
        id: 33,
        name: 'Scarlet Berry',
        image: 'SCARLET BERRY.png',
        price: 185, stock: 29
    }
    ,    
    {
        id: 34,
        name: 'Tropical Passion Fruit',
        image: 'TROPICAL PASSION FRUIT.png',
        price: 185, stock: 20
    }

    
]
let pastaProducts = [
    {
        id: 35,
        name: 'Beef Spaghetti',
        image: 'BEEF SPAGHETTI.png',
        price: 185, stock: 4
    },    
    {
        id: 36,
        name: 'Ham Carbonara',
        image: 'HAM CARBONARA.png',
        price: 185, stock: 8
    },    
    {
        id: 37,
        name: 'Lasagna Sharing',
        image: 'LASAGNA SHARING.png',
        price: 300, stock: 4
    },    
    {
        id: 38,
        name: 'Lasagna Solo',
        image: 'LASAGNA SOLO.png',
        price: 180, stock: 6
    },    
    {
        id: 39,
        name: 'Pizza Style Baked Mac Sharing',
        image: 'PIZZA STYLE BAKED MAC SHARING.png',
        price: 250, stock: 3
    },    
    {
        id: 40,
        name: 'Pizza Style Baked Mac Solo',
        image: 'PIZZA STYLE BAKED MAC SOLO.png',
        price: 150, stock: 6
    },    
    {
        id: 41,
        name: 'Tuna Carbonara',
        image: 'TUNA CARBONARA.png',
        price: 150, stock: 3
    }
]

let sandwichProducts = [
    {
        id: 42,
        name: 'Burger With Chips',
        image: 'BURGER WITH CHIPS.png',
        price: 160, stock: 4
    },    
    {
        id: 43,
        name: 'Chicken Sandwich',
        image: 'CHICKEN.png',
        price: 150, stock: 3
    },    
    {
        id: 44,
        name: 'Tuna Sandwich',
        image: 'TUNA.png',
        price: 135, stock: 4
    }
]

let crofflesProducts = [
    {
        id: 45,
        name: 'Classic',
        image: 'C-CLASSIC.png',
        price: 100, stock: 3
    },    
    {
        id: 46,
        name: 'Chocolate',
        image: 'C-CHOCOLATE.png',
        price: 110, stock: 8
    },    
    {
        id: 47,
        name: 'Nutella',
        image: 'C-NUTElLA.png',
        price: 120, stock: 5
    },    
    {
        id: 48,
        name: 'Nutella Alcapone',
        image: 'C-NUTElLA ALCAPONE.png',
        price: 130, stock: 7
    },    
    {
        id: 49,
        name: 'Matcha',
        image: 'C-MATCHA.png',
        price: 110, stock: 7
    },    
    {
        id: 50,
        name: 'Biscoff',
        image: 'C-BISCOFF.png',
        price: 130, stock: 12
    }
]

let pcrofflesProducts = [
    {
        id: 50,
        name: 'Chocolate',
        image: 'P-CHOCOLATE.PNG',
        price: 130, stock: 9
    },    
    {
        id: 51,
        name: 'Nutella',
        image: 'P-NUTELLA.png',
        price: 140, stock: 6
    },    
    {
        id: 52,
        name: 'Nutella Alcapone',
        image: 'P-NUTELLA ALCAPONE.png',
        price: 150, stock: 2
    },    
    {
        id: 53,
        name: 'Matcha',
        image: 'P-MATCHA.png',
        price: 130, stock: 3
    },    
    {
        id: 54,
        name: 'Cookies & Cream',
        image: 'P-COOKIES&CREAM.png',
        price: 140, stock: 4
    },    
    {
        id: 55,
        name: 'Strawberry',
        image: 'P-STRAWBERRY.png',
        price: 130, stock: 4
    },    
    {
        id: 56,
        name: 'Biscoff',
        image: 'P-BISCOFF.png',
        price: 150, stock: 8
    }
]

let pastriesProducts = [
    {
        id: 57,
        name: 'Blueberry Cheesecake',
        image: 'BLUEBERRY CHEESECAKE.png',
        price: 170, stock: 3
    },    
    {
        id: 58,
        name: 'Carrot Cake',
        image: 'CARROT CAKE.png',
        price: 215, stock: 4
    },    
    {
        id: 59,
        name: 'Chocolate Moist',
        image: 'CHOCOLATE MOIST.png',
        price: 175, stock: 6
    },    
    {
        id: 60,
        name: 'Chocolate Mousse',
        image: 'CHOCOLATE MOUSSE.png',
        price: 195, stock: 8
    },    
    {
        id: 61,
        name: 'Mango Cake',
        image: 'MANGO CAKE.png',
        price: 225, stock: 4
    },    
    {
        id: 62,
        name: 'Newyork Cheesecake',
        image: 'NEWYORK CHEESECAKE.png',
        price: 205, stock: 2
    }  
]

let ricemeaProducts = [
    {
        id: 63,
        name: 'Caldereta',
        image: 'CALDERETA.png',
        price: 170, stock: 3
    },    
    {
        id: 64,
        name: 'Egg',
        image: 'EGG.png',
        price: 215, stock: 20
    },    
    {
        id: 65,
        name: 'Rice',
        image: 'RICE.png',
        price: 175, stock: 29
    },    
    {
        id: 66,
        name: 'Tapa',
        image: 'TAPA.png',
        price: 195, stock: 3
    }
]
function initProduct(category, folder, productList, listElement) {
    productList.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('listProduct');

        // Check if the item is a best seller
        let bestSellerImage = value.seller ? `<img src="${value.seller}" class="best-seller-image" alt="Best Seller" style="width: 20%; height:20%" />` : '';
        let huha = value.stock ? `<div class="stock"> Stock: ${value.stock}  </div>` : '';
        
        // Price display
        let priceDisplay = value.secprice ? `
            <div style="text-align: left;">
                <span>Small: ₱${value.price}</span><br>
                <span>Medium: ₱${value.secprice}</span>
            </div>` : `<p>₱${value.price}</p>`;
        
        newDiv.innerHTML = `
            <div class="product-image-container" style="width:100%">
                <img src="${folder}/${value.image}" class="drink-image">
                ${bestSellerImage} 
                ${huha} 
            </div>
            <h3>${value.name}</h3>
            <hr>
            <div class="rowbtn">
                ${priceDisplay}
                <button id="button" onclick="displaySuccessCard(); addTo${category}Card(${key});" style="border: none; padding: none; background: none; font-size: 24px;">
                    <i class="fa fa-shopping-cart" style="font-size: 120%; color: white;"></i>
                </button>
            </div>`;

        listElement.appendChild(newDiv);
    });
}

// Initialize each product category
function initPastries() {
    initProduct('Pastries', 'PastriesPics', pastriesProducts, pastrieslist);
}

function initCroffles() {
    initProduct('Croffles', 'CrofflesPics', crofflesProducts, croffleslist);
}

function initPCroffles() {
    initProduct('PCroffles', 'PremiumCrofflesPics', pcrofflesProducts, pcroffleslist);
}

function initRicemea() {
    initProduct('Ricemea', 'RiceMealsPics', ricemeaProducts, ricemealist);
}
function initSandwich() {
    initProduct('Sandwich', 'SandwichPics', sandwichProducts, sandwichlist);
}
function initPasta() {
    initProduct('Pasta', 'PastaPics', pastaProducts, pastalist);;
}
function initItalian() {
    initProduct('Italian', 'ItalianSodaPics', italianProducts, italianlist);
}
function initFrappes() {
    initProduct('Frappes', 'FrappePics', frappesProducts, frappelist);
}
function initApp() {
    initProduct('Hot', 'HotCoffeePics', products, list);
}
function initColdCoffee() {
    initProduct('Cold', 'ColdCoffeePics',coldCoffeeProducts ,coldList );
}

let listCards = [];
let coldListCards = [];
let frappesListCards = [];
let italianListCards = [];
let pastriesListCards = [];
let pastaListCards = [];
let sandwichListCards = [];
let crofflesListCards = [];
let pcrofflesListCards = [];
let ricemeaListCards = [];
// Initialize Cold Coffee Products

// Display success card when an item is added to the cart
function displaySuccessCard() {
    const card = document.getElementById('successCard');
    card.classList.add('visible'); // Show the success message
    
    setTimeout(() => {
        card.classList.remove('visible'); // Hide it after 1.6 seconds
    }, 1600);
}

function addToCardGeneral(productList, cardList, key) {
    const product = cardList[key];
    if (!cardList[key]) {
        cardList[key] = JSON.parse(JSON.stringify(productList[key]));
        cardList[key].quantity = 1;
    } else {
        cardList[key].quantity += 1;
        if (cardList[key].quantity > product.stock) {
            cardList[key].quantity = product.stock;
        }
    
    }
    reloadCard();
}

// Usage
function addToHotCard(key) {
    addToCardGeneral(products, listCards, key);
}
function addToColdCard(key) {
    addToCardGeneral(coldCoffeeProducts, coldListCards, key);
}
function addToFrappesCard(key) {
    addToCardGeneral(frappesProducts, frappesListCards, key);
}
function addToItalianCard(key) {
    addToCardGeneral(italianProducts, italianListCards, key);
}
function addToPastaCard(key) {
    addToCardGeneral(pastaProducts, pastaListCards, key);
}
function addToSandwichCard(key) {
    addToCardGeneral(sandwichProducts, sandwichListCards, key);
}
function addToCrofflesCard(key) {
    addToCardGeneral(crofflesProducts, crofflesListCards, key);
}
function addToPCrofflesCard(key) {
    addToCardGeneral(pcrofflesProducts, pcrofflesListCards, key);
}
function addToRicemeaCard(key) {
    addToCardGeneral(ricemeaProducts, ricemeaListCards, key);
}
function addToPastriesCard(key) {
    addToCardGeneral(pastriesProducts, pastriesListCards, key);
}

const allListCards = [
    { list: listCards, folder: "image" },
    { list: coldListCards, folder: "ColdCoffeePics" },
    { list: frappesListCards, folder: "FrappePics" },
    { list: italianListCards, folder: "ItalianSodaPics" },
    { list: pastriesListCards, folder: "PastriesPics" },
    { list: pastaListCards, folder: "PastaPics" },
    { list: sandwichListCards, folder: "SandwichPics" },
    { list: crofflesListCards, folder: "CrofflesPics" },
    { list: pcrofflesListCards, folder: "PremiumCrofflesPics" },
    { list: ricemeaListCards, folder: "RiceMealsPics" }
];

let totalPrice = 0;
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    
    const ad = document.getElementById('itemcount');
    const ab = document.getElementById('sumofall')

    allListCards.forEach(({ list, folder }) => {
        list.forEach((value, key) => {
            if (value) {
                totalPrice += value.price * value.quantity;
                count += value.quantity;

                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="${folder}/${value.image}" alt="${value.name}" /></div>
                    <div>${value.name}</div>
                    <div>₱${(value.price * value.quantity).toLocaleString()}</div>
                    <div>
                        <button onclick="changeQuantity('${key}', ${value.quantity - 1}, '${folder}')">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity('${key}', ${value.quantity + 1}, '${folder}')">+</button>
                    </div>`;
                listCard.appendChild(newDiv);
            }
        });
    });

    // Update total price and quantity in the cart
    total.innerText = `₱${totalPrice.toLocaleString()}`;
    ab.innerHTML = '₱'+(totalPrice);
    quantity.innerText = count;
    ad.innerText = '(' + count + ')';
    
}

function changeQuantity(key, quantity, folder) {
    const cardList = allListCards.find(item => item.folder === folder).list;
    const product = cardList[key];

    if (!product) return;

    // Ensure the quantity does not exceed the stock
    if (quantity > product.stock) {
        quantity = product.stock;
    }

    if (quantity === 0) {
        delete cardList[key];
    } else {
        product.quantity = quantity;
    }

    reloadCard();
}





// Initialize both menus on page load
initApp();
initColdCoffee();
initFrappes();
initItalian();
initPastries();
initPasta();
initSandwich();
initCroffles();
initPCroffles();
initRicemea();