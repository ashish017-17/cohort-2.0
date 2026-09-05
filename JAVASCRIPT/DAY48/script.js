let box = document.getElementById('box')
let body = document.querySelector('body')

// box.addEventListener('click', function(){
//     console.log('event performed');
    
// })

// box.addEventListener('dblclick', function(){
//     console.log('event performed');
    
// })

// box.addEventListener('mouseenter', function(){
//     console.log('Enter...');
    
// })

// box.addEventListener('mouseleave', function(){
//     console.log('Left...');
    
// })

// body.addEventListener('mousemove', function(dets){
//     console.log(dets.x);
    
// })

// body.addEventListener('click', function(dets){
//     console.log(dets);
    
// })

// body.addEventListener('wheel', function(dets){
//     console.log(dets);
    
// })

// body.addEventListener('keydown', function(dets){
//     console.log(dets);
    
// })

let main = document.getElementById('main')

let cursor = document.getElementById('cursor')

main.addEventListener('mousemove', function(dets){
    // console.log(dets.x);

    cursor.style.left = dets.x + 'px'

    cursor.style.top = dets.y + 'px'


})