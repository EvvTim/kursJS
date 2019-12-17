let numbers = [5, 8, 10, 23, 48, 60];

// for (let number of numbers) {
//     let x = number / 5;
//     console.log(x);
// }


for (const number of numbers) {

    if ( number % 2 === 0) {

        console.log(`liczba ${number} jestpodzielna przez 2`);
        
    } else {

        console.log(`liczba ${number} nie jest podzielna przez 2`);
        
    }
    
}
