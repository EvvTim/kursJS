// // function test () {
// //     console.log(this);
// // }

// // const test2 = () => {
// //     console.log(this);
// // }


// // test();
// // test2()


// const ob = {
//     name: 'Zhenia',

//     callName() {
//         console.log(this.name);

//         function callNameAgain() {
//             console.log(`BINDE: ${this.name}`);
//         };

//         callNameAgain.bind(this)()

//         const callAgain = () => {
//             console.log(`Funkcja strzałkowa w callName: ${this.name}`);
//         };

//         callAgain()

//     }
// }



// ob.callName();




// const colorsObj = {
//     colors: ['red','blue','green'],
//     showColors () {
//         this.colors.forEach((el, i) => {
//             console.log(this.colors[i]);
//         })
//     }
// }


// colorsObj.showColors()


function add(c,d) {
    return this.a + this.b + c + d; 
}

const numbers = {
    a: 1,

    b: 7
}

console.log(add.call(numbers, 3,9));
console.log(add.apply(numbers,[7,-5]));


const user = {
    name: 'Zhenia'
}

const showUser = () => {
    console.log(this.name);
}

showUser.bind(user)()

const showUser2 = function() {
    console.log(this.name);
}


showUser2.bind(user)()

