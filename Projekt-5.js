const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let frh;
let cel;

const swap = () => {
    if (one.innerText === '°C') {
        one.innerText = '°F';
        two.innerText = '°C';
        converter.value = '';
        result.innerText = '';
    } else {

        one.innerText = '°C';
        two.innerText = '°F';
        converter.value = '';
        result.innerText = '';

    }
};


const celToFrh = () => {
    frh = converter.value * 1.8 + 32;
    result.textContent = converter.value + `°C to ${frh.toFixed(2)}°F`;
    converter.value = '';
}

const frhToCel = () => {
    cel = (converter.value - 32) / 1.8;
    result.textContent = converter.value + `°F to ${cel.toFixed(2)}°C`;
    converter.value = '';
}



const convert = () => {
    if (converter.value !== '') {
        if (one.innerText === '°C') {
            celToFrh();

        } else {
            frhToCel();
        }
    } else {
        result.innerText = 'Musisz wpisać jakąś liczbę!!!'
    }



}

const reset = () => {
    converter.value = '';
    result.innerText = '';
}


resetBtn.addEventListener('click', reset);
convBtn.addEventListener('click', convert);
changeBtn.addEventListener('click', swap);