const ulList = document.createElement('ul');
document.body.appendChild(ulList);

let number = 3;

// ulList.appendChild(liItem).textContent = 1;

for (let i = 1; i <= number; i++) {
    
    const liItem = document.createElement('li');
    ulList.appendChild(liItem).textContent = i;
    
}

const lastLiEl = document.querySelector('li:last-child').textContent = 'Ostatni element';