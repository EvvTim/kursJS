const btns = document.querySelectorAll('.btn');
const numbers = document.querySelector('.numbers');


for (const btn of btns) {
    
    btn.addEventListener('click', function() {
        numbers.innerText = this.innerText
    })


}
