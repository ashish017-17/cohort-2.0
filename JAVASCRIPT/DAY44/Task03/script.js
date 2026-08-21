let main = document.querySelector('main')
let btn = document.querySelector('button')

const quotes = [
  "Believe you can and you're halfway there.",
  "Dream big, work hard, stay focused.",
  "Success is the sum of small efforts repeated every day.",
  "Don't stop when you're tired. Stop when you're done.",
  "Your only limit is your mind.",
  "Great things never come from comfort zones.",
  "Difficult roads often lead to beautiful destinations.",
  "Make today so awesome that yesterday gets jealous.",
  "The future depends on what you do today.",
  "Stay positive, work hard, make it happen.",
  "It always seems impossible until it's done.",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe in yourself and you will be unstoppable.",
  "Small progress is still progress.",
  "Turn your wounds into wisdom.",
  "Success doesn't come overnight.",
  "Be stronger than your excuses.",
  "Every day is a new beginning.",
  "Focus on the journey, not the destination.",
  "You are capable of amazing things."
];

btn.addEventListener('click', ()=>{
    let h1 = document.createElement('h1')
    console.log(h1)

    let num = Math.floor(Math.random()*quotes.length)

    let x = Math.random()*80
    let y = Math.random()*80

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    h1.innerHTML = quotes[num]

    h1.style.color = ('white')
    h1.style.position = ('absolute')
    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3}) `


    main.appendChild(h1)

})