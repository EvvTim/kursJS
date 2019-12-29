const hamBtn = document.querySelector('.burger')
const nav = document.querySelector('nav');
const hamIco = document.querySelector('.fa-bars');
const closeIco = document.querySelector('.fa-times');


hamBtn.addEventListener('click', function () {

    nav.classList.toggle('active');
    hamBtn.classList.toggle('active');
    
    if (hamBtn.classList.contains('active')) {
        hamIco.classList.add('hide'); 
        closeIco.classList.remove('hide');       
    } else {
        hamIco.classList.remove('hide'); 
        closeIco.classList.add('hide');       



        
    }

});




