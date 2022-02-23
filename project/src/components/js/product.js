const basket = {
    items: [],
    addItems() {
        //добавляет товары и увеличивает их кол-во в корзине
    },
    removeItems() {
        //удаляет товары из корзины
    },
}; 

let getItemOfProduct = function (id, name, price, img) {
    return {id,name, price, img};
};

function initCatalog () {
    let ids = [1, 2, 3, 4, 5, 6, 7, 8];
    let itemNames = [
        'Mango People T-shirt', 
        'Mango People T-shirt', 
        'Mango People T-shirt', 
        'Mango People T-shirt',
        'Mango People T-shirt',
        'Mango People T-shirt',
        'Mango People T-shirt',
        'Mango People T-shirt',
     ];
    let itemPrices = ['$52', '$52', '$52', '$52', '$52', '$52', '$52', '$52'];
    let itemImges = [
        '../src/assets/imgs/Fetured1.jpg', 
        '../src/assets/imgs/Fetured2.jpg', 
        '../src/assets/imgs/Fetured3.jpg', 
        '../src/assets/imgs/Fetured4.jpg',
        '../src/assets/imgs/Fetured5.jpg',
        '../src/assets/imgs/Fetured6.jpg',
        '../src/assets/imgs/Fetured7.jpg',
        '../src/assets/imgs/Fetured8.jpg',
    ];

    return itemNames.map((name, index) => getItemOfProduct(ids[index], name, itemPrices[index], itemImges[index]));
} 

let catalog = {
    items: [],
    conteiner: document.querySelector('#conteinerForFeatures'), //выбирает контейнер в который отрендерятся карточки товаров, переделать на проект
    init() {
        this.conteiner = document.querySelector('#conteinerForFeatures');
        this.items = initCatalog();
        this._renderItems();
    },
    _renderItems () {
        let str = '';

        this.items.forEach((item, index) => {
            str += `
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems indexFeturedItems">
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button>
                                <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                            </button>
                        </div>
                        <img class="feturedProduct" src="${catalog.items[index].img}" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">${this.items[index].name}</div>
                        <div class="feturedItemPrice">${this.items[index].price}</div>
                        <button class="d-md-none">
                            <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                        </button>
                    </div>
                </div>
            </div>
            `;
        });
        catalog.conteiner.insertAdjacentHTML('afterbegin', str);
    }
};

catalog.init(); 


 




