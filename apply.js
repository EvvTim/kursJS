// funkcja.apply(OBIEKT, TABLICA)

function add(...args) {

    let result = 0;
    for (let i = 0; i < args.length; i++) {

        result += args[i];

    }
    return result;
}


const score = add.apply(null, [1, 2, 3, 4, 5, 6]);
console.log(score);