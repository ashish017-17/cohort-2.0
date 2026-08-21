// let btn = document.querySelector('button')
// let hh1 = document.querySelector('main')

let h1 = document.createElement('h1')
h1.innerHTML = 'Hello from JS'

let main = document.querySelector('main')
main.appendChild(h1)

let btn = document.createElement('button')
btn.innerHTML = 'new button'
btn.style.color = 'yellow'
main.appendChild(btn)

let box1 = document.createElement('div')
box1.style.height = '100px'
box1.style.width = '100px'
box1.style.backgroundColor = 'royalblue'
box1.style.borderRadius = '10px'
main.appendChild(box1)



// btn.addEventListener('click', function(){
//     let h1 = document.createElement('h1')
//     let hh1 = document.querySelector('main')
//     h1.innerHTML = 'hello from js!!'
//     main.appendChild(hh1)
//     // console.log(h1);
// })


