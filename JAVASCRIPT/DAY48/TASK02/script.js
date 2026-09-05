let aud = new Audio('./30.mp3')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')

// h1.addEventListener('click',function(){
//     aud.play()
// })

body.addEventListener('keydown',function(dets){
    if(dets.code == 'KeyD'){
        aud.play()
    }
})
