const num = 10;
let numbers = [];

for (let i = 0; i < num; i++) {    
    numbers.push(i);    
}

const divided = x => {
    if (x % 3 === 0 && x !== 0) {
        console.log(`${x} jest podzielne przez 3`);
    } else {
        console.log(`${x} nie jest podzielne przez 3`);
    }
}

const d = numbers.forEach(divided);