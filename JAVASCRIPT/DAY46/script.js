let img = document.querySelector('img')
let like = document.getElementById('like')

img.addEventListener('dblclick', () => {
    console.log('liked')
    like.style.opacity = '1'
    like.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'

    setTimeout(() => {
        like.style.transform = 'translate(-50%,-800%) scale(1) rotate(60deg)'
    }, 600);

    setTimeout(() => {
        like.style.opacity = '0'
        like.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
    }, 900);

})