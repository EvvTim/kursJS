// let numbers = [1,2,3,4,5];
// let colors = ['green','blue', 'yellow'];

// // let newArr = numbers.concat(colors);

// let newArr = [...numbers,...colors];

// console.log(newArr);


// let numbers = [2323,31231,213213,123,1,456546,7657,435,4];

//  numbers.forEach( el => console.log(el * 5));

// const colors = ['yellow'];
// colors.unshift('blue');
// colors.push('green');
// for (const color of colors) {
//     console.log(`Mój ulubiony kolor to: ${color[0].toUpperCase() + color.slice(1)}`);
// }

// console.log(colors);

const cars = 'Audi, Mercedes, BMW, Nissan, Dodge';

const newCarsArr = cars.split(', ');

console.log(newCarsArr);


(newCarsArr.length > 3) ? console.log('Jest OK') : console.log(`Nie jest OK`);

console.log(newCarsArr.includes('Audi'));

if (newCarsArr.includes('Audi')) {
    newCarsArr.push('Lada');
} else {
  newCarsArr.pop();   
}

console.log(newCarsArr);


for (let i = 0; i < newCarsArr.length; i++) {
    console.log(newCarsArr[i].toUpperCase());
    
}


 
