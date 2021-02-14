"use strict";

const mockedGoodsItem = [
    { id: 1, title: "Shirt", price: 150 },
    { id: 2, title: "Socks", price: 50 },
    { id: 3, title: "Jacket", price: 350 },
    { id: 4, title: "Shoes", price: 250 }
];

class GoodsList {
    constructor() {
        this.goods = [];
    }

    __getGoodsItemTemplate(id, title, price) {
        return `<div class="goods-item">
                    <div>
                        <div class="choisecart">
                            <button><img src="Img/cart.png" alt="cart">Add to Cart</button>
                        </div>
                        <img class="cardImg" src="Img/cardProduct${id}.png" alt="cardProduct">
                        <h3 class="cardProduct">${title}</h3>
                        <p>$${price}</p>
                    </div>
                </div>`;
    }

    getGoods(goods) {
        this.goods = goods;
    }

    render() {
        let goodsList = this.goods.map(item => this.__getGoodsItemTemplate(item.id, item.title, item.price));
        document.querySelector(".shoppingCart").innerHTML = goodsList.join("");
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

list.getGoods(mockedGoodsItem);

list.render();

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