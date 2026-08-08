// DOM - Document Object Model
// Frontend ki JS

// DOM 4 Pillars

// - Selection of an Element

let h1 = document.querySelector('h1');
let box = document.querySelector('#box');
let btn = document.querySelector('button');

// - Changing HTML

h1.innerHTML = 'changed';
box.innerHTML = 'Box';
btn.innerHTML = 'click me!';

// - Changing CSS

h1.style.color = 'red';
h1.style.backgroundColor = 'yellow';
box.style.backgroundColor = 'purple';
box.style.borderRadius = '50%';
btn.style.paddingTop = '20px';

// - Event listeners

btn.addEventListener('click', function(){
    h1.innerHTML = 'how are you?';
    h1.style.color = 'black';
    h1.style.fontSize = '100px';
    box.style.backgroundColor = 'royalblue';
    box.style.borderRadius = '0%';
})

let h11 = document.getElementById('hero')

let elem = document.getElementsByClassName('elem')

let h1 = document.querySelectorAll('h1')

