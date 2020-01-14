const user = {
    name: 'Lily',
    age: '23',
    job: 'DJ',
    car: {
        brand: 'Dodge',
        model: 'Viper'
    }
}


// const {klucz / klucze } = obiekt

// const aboutMe = (info) => {
//     const {
//         name,
//         age,
//         job
//     } = info;

//     console.log(`${name} ma ${age} lata i pracuje ${job}`);
// }

// aboutMe(user);


const aboutMe2 = ({
    car: {
        brand,
        model
    }
}) => {

    console.log(`Jej samochód to: ${brand} ${model}`);
}

aboutMe2(user)