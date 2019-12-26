const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const text = document.querySelector('p');


const showTextFun = () => {
    text.classList.add('show');
    text.classList.remove('hide');
};

btn1.addEventListener('click', showTextFun);


const hideTextFun = () => {
    text.classList.add('hide');
    text.classList.remove('show');
} ;

btn2.addEventListener('click', hideTextFun);


