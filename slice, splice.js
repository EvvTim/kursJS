// splice - niedestrukcyjna
// splice - destrukcyjna

const numbers = [1,1,0,0,11,11,11];
console.log(numbers);

const numbers2 = numbers.slice(2,4);
console.log(numbers2);
console.log(numbers);


const arr = [0,0,'red','green','blue',123,true];
console.log(arr);

const colors = arr.splice(2,3);
console.log(colors);
console.log(`SPLICE: ${colors.join(' ')}`);
console.log(arr);