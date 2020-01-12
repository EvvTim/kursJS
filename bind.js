// const car1 = {
//     name: 'Ferrari'
// };

// const car2 = {
//     name: 'Audi'
// };


// const car3 = {
//     name: 'Lada'
// };


// function showName() {
//     console.log(this.name);
// };

// showName.bind(car1)();


const colorsObj = {

    colors: ['red', 'green', 'blue'],

    showColors() {

        this.colors.forEach(function (el, i) {

            console.log(this.colors[i]);


        }.bind(this))
    }
}


colorsObj.showColors()