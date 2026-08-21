let main = document.querySelector('main')
let btn = document.querySelector('button')


let arr = ['Hey! I am Sarthak', 'Sheryians is Best.', 'Anubhav is handsome', 'hello!!', 'Ashish', 'JavaScript']

btn.addEventListener('click', function(){

    let h1 = document.createElement('h1')

    let num = Math.floor(Math.random()*arr.length)

    let x = Math.random()*80
    let y = Math.random()*80
    let r = Math.random()*360
    let scl = Math.random()*3

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = r + 'deg'
    h1.style.scale = scl
    h1.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3}) `

    h1.innerHTML = arr[num]

    h1.style.color = 'white'
    h1.style.position = 'absolute'

    main.appendChild(h1)
    


})