let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <div class="product-image-container" style="width:100%">
                        <img src="${product.image}" class="product-image">
                    </div>
                    <h3>NAME</h3>
                    <hr>
                    <div class="rowbtn">
                        
                        <button id="button" style="border: none; padding: none; background: none; font-size: 24px;">
                            <i class="fa fa-shopping-cart" style="font-size: 120%; color: white;"></i>
                        </button>
                    </div>
            `;
            listProductHTML.appendChild(newProduct);
        })
    }
}

const initApp = () => {
    fetch('JS_Folder/products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        console.log(listProducts);
        addDataToHTML();
    })
}
// Function to copy content from one div to another

initApp();