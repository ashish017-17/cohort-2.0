let main = document.getElementById('main')
let upper = document.getElementById('upper')
let lower = document.getElementById('lower')
let h1 = document.getElementById('h1')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')
let increase = document.getElementById('increase')

let count = 0
 
decrease.addEventListener('click',()=>{
    count--
    h1.innerHTML = count
    h1.style.color = ('red')
})

reset.addEventListener('click', ()=>{
    count = 0
    h1.innerHTML = count
    h1.style.color = ('black')
})

increase.addEventListener('click', ()=>{
    count++
    h1.innerHTML = count
    h1.style.color = ('green')
})