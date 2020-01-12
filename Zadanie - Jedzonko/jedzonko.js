const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const pDishes = document.querySelector('.special')

function SpecialDishes(name,price){

    this.name = name;
    this.price = price;
}

SpecialDishes.prototype.getDishes = function() {
    pDishes.innerText = `${this.name} kosztuje ${this.price}zł`;
}


btn1.addEventListener('click', function() {
    ramen.getDishes()
})

btn2.addEventListener('click', function() {
    burger.getDishes()
})

btn3.addEventListener('click', function() {
    kebab.getDishes()
})





const ramen = new SpecialDishes('Ramen', 13);
const burger = new SpecialDishes('Burger', 18);
const kebab = new SpecialDishes('Kebab', 15);

