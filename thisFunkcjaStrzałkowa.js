// function test () {
//     console.log(this);
// }

// const test2 = () => {
//     console.log(this);
// }


// test();
// test2()


const ob = {
    name: 'Zhenia',

    callName() {
        console.log(this.name);

        function callNameAgain() {
            console.log(`BINDE: ${this.name}`);
        };

        callNameAgain.bind(this)()

        const callAgain = () => {
            console.log(`Funkcja strzałkowa w callName: ${this.name}`);
        };

        callAgain()

    }
}



ob.callName();




const colorsObj = {
    colors: ['red','blue','green'],
    showColors () {
        this.colors.forEach((el, i) => {
            console.log(this.colors[i]);
        })
    }
}


colorsObj.showColors()


