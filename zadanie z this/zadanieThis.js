const user = {
    name: 'Lily',
    age: '23',
    'fav-color': 'blue',
    car: {
        brand: 'Lada'
    }
}


const fn1 = function () {
    console.log(`${this.name} ma ${this.age} lata, a jej ulubiony kolor to ${this['fav-color']} `);
}

fn1.bind(user)()


const fn2 = function (carColor) {
    console.log(`Jeżdzi autem marki ${this.car.brand}. Samochód jest koloru ${carColor}`);
}


fn2.call(user, 'black')

