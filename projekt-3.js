const sizeUpBtn = document.querySelector('.sizeUp');
const sizeDownBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const text = document.querySelector('p');

let size = 36;

sizeUpBtn.addEventListener('click', function () {
    size += 5

    text.style.fontSize = `${size}px`;


})

sizeDownBtn.addEventListener('click', function () {
    size -= 5

    text.style.fontSize = `${size}px`;


})


const colorChanger = () => {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255); 

    text.style.color = `rgb(${r},${g},${b})`;
}


colorBtn.addEventListener('click', colorChanger);