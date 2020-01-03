const newUser = {
    name: 'Zhenia',
    age: 25,

    bike: {
        brand: 'Dolan',
        color: 'Grey',
        year: 2018,

        sound () {
            console.log('ding ding');
        }
    }
}


console.log(`${newUser.name} jezdzi rowerem marki ${newUser.bike.brand} :P`);