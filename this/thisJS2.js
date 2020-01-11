function test () {
    console.log(this.name);
}

const obj1 = {
    name : "Zhenia",
    test : test
}

const obj2 = {
    name : 'Dima',
    test : test
}

const obj3 = {
    name : 'Nastia',
    test : test
}

const obj4 = {
    name : 'Jan',
    test : test
}


obj1.test();
