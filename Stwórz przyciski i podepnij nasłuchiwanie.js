const addCl = document.querySelector('.btn1');
const removeCl = document.querySelector('.btn2');
const textP = document.querySelector('p');


addCl.addEventListener('click', function () {
    textP.classList.add('show');
    textP.classList.remove('hide');
});

removeCl.addEventListener('click', function () {
    textP.classList.add('hide');
    textP.classList.remove('show');
});


