// konstrukror

function User(name, age) {
    this.name = name;
    this.age = age;

    // this.hello = function () {
    //     console.log(`Użytkownik ma na imię ${this.name} i ma ${this.age} lat`);
    // }
}

User.prototype.hello = function () {
    console.log(`Użytkownik ma na imię ${this.name} i ma ${this.age} lat`);
}

const newUser = new User('Zhenia', 25);

newUser.hello()