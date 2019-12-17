

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.unshift(100, 200, 'test');
console.log(numbers);

const deleted = numbers.shift();
console.log(deleted);
console.log(numbers);

// 

const colors = ['red', 'blue', 'green'];
console.log(colors);

colors.push('yellow', 'orange');
console.log(colors);

const deleted2 = colors.pop();
console.log(deleted2);
console.log(colors);

