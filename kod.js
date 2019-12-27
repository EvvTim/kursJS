const img1 = document.querySelector('.item1');
const img2 = document.querySelector('.item2');
const btn = document.querySelector('.arrow');


const hideFun = () => {
    img1.classList.toggle('hide');
}

btn.addEventListener('click', hideFun);