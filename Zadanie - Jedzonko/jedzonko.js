const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const specialDishes = document.querySelector('.special');



function ProductPrice(name, price) {
    
    this.name = name;
    this.price = price;
}

ProductPrice.prototype.getProductPrice = function () {
    
    specialDishes.innerText = `${this.name} kosztuje ${this.price}zł`;
    
}

btn1.addEventListener('click', function () {
    
    product1.getProductPrice();
    
})

btn2.addEventListener('click', function () {
    
    product2.getProductPrice();
    
})

btn3.addEventListener('click', function () {
    
    product3.getProductPrice();
    
})


const product1 = new ProductPrice('Kebab', 18);
const product2 = new ProductPrice('Ramen', 8);
const product3 = new ProductPrice('Burger', 15);







