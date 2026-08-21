let ob1 = document.getElementById('ob1')
let ob2 = document.getElementById('ob2')
let ob3 = document.getElementById('ob3')
let ob4 = document.getElementById('ob4')
let h1 = document.getElementById('h1')
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {

    let num1 = Math.floor(Math.random()*10)
    let num2 = Math.floor(Math.random()*10)
    let num3 = Math.floor(Math.random()*10)
    let num4 = Math.floor(Math.random()*10)

    // console.log(num1)
    // console.log(num2)
    // console.log(num3)
    // console.log(num4)

    setTimeout(() => {
        h1.innerHTML = 'Generating OTP.'
    },500)

    setTimeout(() => {
        h1.innerHTML = 'Generating OTP..'
    },1000)

    setTimeout(() => {
        h1.innerHTML = 'Generating OTP...'
    },1500)

    setTimeout(() => {
        h1.innerHTML = 'Generating OTP....'
    },2000)

    setTimeout(() => {
        h1.innerHTML = 'Generating OTP.....'
    },2500)

    setTimeout(() => {
        h1.innerHTML = 'OTP Generated'
        ob1.innerHTML = num1
        ob2.innerHTML = num2
        ob3.innerHTML = num3
        ob4.innerHTML = num4
    },3000)

    
    
})