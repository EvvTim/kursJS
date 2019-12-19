const test = function (name) {
    console.log(name);
} 

test('Ania');

const test2 = (name) => {
    console.log(name);
}

test2('Żenia');

// ZASADY

const test3 = () => {
    console.log('Kla');
}
 
test3();

const test4 = age => console.log(age);

test4(25);


function add(x,y) {
    return x + y;
}

const add2 = (x,y) => x + y;


const arr = ['green', 'blue', 'yellow'];

const arr2 = arr.forEach(x => console.log(x));


 
 