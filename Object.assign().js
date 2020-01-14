const user = {
    name: 'Lily',
    age: 23

}

const pet = {
    name: 'Drops',
    type: 'dog'

}

const newObj =  Object.assign({},user,pet);
console.log(user);
console.log(pet);
console.log(newObj);


const car = {
    brand: 'Audi',
    year: 2005,
    color:'silver'
}

const car2 = Object.assign({},car)
car2.brand = 'Lamborghini'
console.log(car);
console.log(car2);