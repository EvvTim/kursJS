const numbers = [0.5, 4, 'abcd'];
const names = ['Klaudia', 'Adam', 'Lily', 'Przemek'];

// forEach i callback

const newNumbers = numbers.forEach(

    el => console.log(`${el} do potęgi drugiej to: ${el ** 2}`)

    );


const showBigNames = name => name.toUpperCase();


const bigNames =  names.map(showBigNames);
    
console.log(

    `lista imion w tablicy to: ${bigNames.join(', ')}`
    
    );

