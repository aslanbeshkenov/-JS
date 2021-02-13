"use strict";

const goods = [
    { id: 1, title: "Shirt", price: 150 },
    { id: 2, title: "Socks", price: 50 },
    { id: 3, title: "Jacket", price: 350 },
    { id: 4, title: "Shoes", price: 250 }
];

const renderGoodsItem = (id, title, price) => {
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
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.id, item.title, item.price));
    document.querySelector(".goods-list").innerHTML = goodsList.join("");
};

renderGoodsList(goods);