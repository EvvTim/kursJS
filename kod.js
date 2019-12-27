const img1 = document.querySelector('.item1');
const btn = document.querySelector('.arrow');
const arrow = document.querySelector('.fas');


const hideFun = () => {
    img1.classList.toggle('hide');

    if (img1.classList.contains('hide')) {
        
        arrow.style.transform = 'rotate(180deg)';
        
    } else {
        
        arrow.style.transform = 'rotate(0deg)';

    }
}

btn.addEventListener('click', hideFun);

