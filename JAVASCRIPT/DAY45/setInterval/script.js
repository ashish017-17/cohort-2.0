// setTimeout - delay
// setInterval - controlled loop

let grow = 0

let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let inner = document.getElementById('inner')


btn.addEventListener('click', () => {

    btn.style.pointerEvents = 'none'
    btn.style.opacity = 0.5

    let num1 = 50 + Math.floor(Math.random()*100)
    

   let int = setInterval(() => {
        grow++
        h2.innerHTML = `${grow}%`
        inner.style.width = `${grow}%`
   }, num1);

   setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        alert(`Downloaded in ${num1/10}seconds`)
   }, num1*100);
   

})








// let a = 0

// let int = setInterval(function(){
//     a++

//     console.log(a);
// },100)

// setTimeout(() => {
//     clearInterval(int)
// }, 6000);
