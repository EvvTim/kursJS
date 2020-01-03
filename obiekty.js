// const name = 'Drops';
// const age = 5;

// const dog = {
//     name: name,
//     age: age,
//     // klucz : wartość
// }


const name = 'Drops';
const age = 5;

const dog = {
    name,
    age
    
}


console.log(dog.name);
console.log(dog.age);


delete dog.age;
console.log(dog);