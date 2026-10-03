let para = document.querySelector('p') 
let gradient = document.getElementById('gradient')
let para22 = document.getElementById('text2')


let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" /* 52 */

let text = para.innerText
let text1 = gradient.innerText
let text2 = para22.innerText

// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{};:'",.<>/?\|`~0.321456987

// console.log(para);

let iteration = 0


function randomText(){
    let str = text.split("").map((char, index)=>{
        if (index < iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")

    para.innerText = str

    iteration += 0.2

    console.log(iteration); 
}


function gradientText(){
    let str = text1.split("").map((char, index)=>{
        if (index < iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")

    gradient.innerText = str
    
    iteration += 0.1

    console.log(iteration);
}

function para2(){
    let str = text22.split("").map((char, index)=>{
        if (index < iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")

    para22.innerText = str
    
    iteration += 0.2

    console.log(iteration);
}



para.addEventListener('mousemove', ()=>{
    
    setInterval(() => {
        randomText()
    }, 3000);

})

gradient.addEventListener('mousemove', ()=>{
    
    setInterval(() => {
        gradientText()
    }, 100);

})

para22.addEventListener('mousemove', ()=>{
    
    setInterval(() => {
        para2()
    }, 100);

})



















// para.addEventListener('mouseenter', ()=>{

//     setInterval(() => {
//         let str = text.split('').map((char, index) => {
//         return characters.split("")[Math.floor(Math.random() * 77)]
//     }).join("")

//     para.innerText = str
    
//     console.log(str);
//     }, 30);
    
// })


