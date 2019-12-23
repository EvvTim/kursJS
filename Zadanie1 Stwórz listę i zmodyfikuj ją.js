const ulList = document.createElement('ul');
document.body.appendChild(ulList);

const numberLi = 3;

for (let i = 1; i <= numberLi; i++) {
    
    const liItem = document.createElement('li');
    ulList.appendChild(liItem).textContent = i;
}

const lastLi = document.querySelector('li:last-child').textContent = 'Ostatni element';
