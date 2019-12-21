let score;

const add = function (x,y) {
    score = x + y;

    if (score % 2 === 0) {
         paired();
    } else {
         unpaired();
    }
    
}   

const paired = el => {
    console.log(`liczba ${score} jest parzysta!`);
}
const unpaired = el => {
    console.log(`liczba ${score} jest nieparzysta!`);
}





add(20,2);




