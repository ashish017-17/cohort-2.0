let h1 = document.getElementById('num')
let inc = document.getElementById('inc')
let decc = document.getElementById('decc')

let number = 0

inc.addEventListener('click', function(){
    number++
    h1.innerHTML = number
    h1.style.color = 'green'
})

decc.addEventListener('click', function(){
    number--
    h1.innerHTML = number
    h1.style.color = 'crimson'
})