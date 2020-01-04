function User(number) {
    this.rNumber = number;
    // this.test = function () {
    //     console.log(`Metoda w obiekcie`);
    // }
}

User.prototype.test = function () {
    console.log(`Jestem poza OBIEKTEM!`);
}

const newUser = new User(67563);

console.log(newUser.test());