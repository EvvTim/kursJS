const result = document.querySelector('span:first-child');
const newResult = document.querySelector('span:last-child');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');


let $score;


const multiplyNum = 2;
const divisionNum = 2;

const addFun = (x,y) => {
    $score = x + y;
    result.textContent = $score;
}



const multiplyFun = () => {
    const multiplyScore = $score * multiplyNum;
    newResult.textContent = multiplyScore
} 



const divisionFun = () => {
    const divisionScore = $score / divisionNum;
    newResult.textContent = divisionScore;
}


btn1.addEventListener('click', multiplyFun);
btn2.addEventListener('click', divisionFun);

addFun(4,4);





