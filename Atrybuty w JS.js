const link = document.querySelector('a');
const img = document.querySelector('img');
const h1 = document.querySelector('h1');


link.setAttribute('target','_blank' );
// setAttribute(nazwaAtrybutu, właściwość)


console.log(img.getAttribute('alt'));
// getAttribute - pobiera zawartość atrybutu


const hasAtr = img.hasAttribute('src');
console.log(hasAtr);
// true / false 

h1.removeAttribute('style');
// usuwa wskazany atrybut 
