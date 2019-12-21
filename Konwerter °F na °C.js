let cel;
let temp;

const fahr = x => {
    cel = x;

    temp = x * 1.8 + 32;


};


fahr(20)

console.log(`${cel}C to ${temp}F`);

