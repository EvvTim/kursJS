function Food(name, price) {
    this.name = name;
    this.price = price;
}


const sandwich = new Food('Kanapka', 8);
console.log(sandwich);

Food.prototype.showMeal = function() {
    console.log(`${this.name} kosztuje ${this.price}zł`);
}


sandwich.showMeal();

///////////////////////////////////////////////////////////


class Food2 {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    showMeal2() {
        console.log(`${this.name} kosztuje ${this.price}zł`);
    }
}

const shake = new Food2('Milk shake', 5);

console.log(shake);

shake.showMeal2()