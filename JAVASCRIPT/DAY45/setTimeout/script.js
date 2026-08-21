//setTimeout - delay
//setInterval - 

let main = document.querySelector('main')
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let create = document.getElementById('create')
let del = document.getElementById('del')
let Changing = document.getElementById('changing')


create.addEventListener('click', () => {
    
    Changing.innerHTML = 'Changing user ....'

    setTimeout(()=>{
        Changing.innerHTML = 'changed'
    },1000)

    setTimeout(()=>{
        let one = Math.floor(Math.random()*1000000)
        box2.innerHTML = `GuestUser${one}`
    },1000)

    
})


del.addEventListener('click', () => {

    Changing.innerHTML = 'Deleting user ....'

    setTimeout(()=>{
        Changing.innerHTML = 'Deleted'
    },1000)

    setTimeout(()=>{
        box2.innerHTML = ``
    },1000)

    setTimeout(()=>{
        Changing.innerHTML = 'Create new user'
    },2000)

})



// setTimeout(function(){
//     console.log("hello 1")
// },2000)

// console.log("hello 2")