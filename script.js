"use strict";

const mockedGoodsItem = [
    { id: 1, title: "Shirt", price: 150 },
    { id: 2, title: "Socks", price: 50 },
    { id: 3, title: "Jacket", price: 350 },
    { id: 4, title: "Shoes", price: 250 }
];

let url = new URL("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json");

function makeGETRequest(url, callback) {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open("GET", url, true);
        // xhr.onload = () => resolve(callback(xhr.response));
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

makeGETRequest(url);

fetch("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json")
    // .then(response => response.json())
    .then(json => console.log(json))
    .then(json => list.getGoods(JSON.parse(json)))
    .then(json => list.render(json));

class GoodsList {
    constructor() {
        this.goods = [];
    }

    __getGoodsItemTemplate(id_product, product_name, price) {
        return `<div class="goods-item">
                    <div>
                        <div class="choisecart">
                            <button><img src="Img/cart.png" alt="cart">Add to Cart</button>
                        </div>
                        <img class="cardImg" src="Img/cardProduct${id_product}.png" alt="cardProduct">
                        <h3 class="cardProduct">${product_name}</h3>
                        <p>$${price}</p>
                    </div>
                </div>`;
    }

    getGoods(goods) {
        this.goods = goods;
    }

    render() {
        let goodsList = this.goods.map(item => this.__getGoodsItemTemplate(item.id_product, item.product_name, item.price));
        document.querySelector(".goods-list").innerHTML = goodsList.join("");
    }
    // добавьте для GoodList метод определяющий стоимость всех товаров
    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            totalPrice += good.price;
            console.log(totalPrice);
        });
        let totalGoodsAnswer = "Все товары на сумму $" + totalPrice;
        document.querySelector(".totalGrand").innerHTML = totalGoodsAnswer;
    }
}

const list = new GoodsList();

// list.getGoods();

// list.render();

// Класс элементов корзины
class BasketItem {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

// Класс корзины
class Basket {
    constructor() {
        this.goods = [];
    }
    // добавление товара в корзину
    addToBasket() { }
    // удаление товара из корзины
    deleteFromBasket() { }
    // стоимость и количество товаров
    calcBasket() { }
    // активирует кнопку Перейти в корзину если там есть товары
    orderBasket() { }
}

