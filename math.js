// console.log(Math.PI);

// console.log(Math.max(10,5));

// console.log(Math.min(10,5));

// console.log(Math.pow(3,3));

// console.log(Math.floor(Math.random() * 10));


const number = +prompt('Podaj liczbę od 1 do 10','1-10');

if (number == Math.floor(Math.random() * 2)) {
    alert('Wygrałeś!!!');
    
} else {
    alert('Przegrałeś :c');
    
}