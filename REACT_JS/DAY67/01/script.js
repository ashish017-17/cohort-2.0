// function hero(){
//     console.log('Hey I am Sarthak');

//     return 10
// }

// console.log(hero());

// let a = hero()

// console.log(a);

// function add(a,b){
//     return a + b
// }

// console.log(add(10, 20));

// import hero from './app.js'
// import test from './test.js';



// hero()
// test()

// console.log(hero());
// console.log(test());


// console.log(React);
// console.log(ReactDOM);


// let h1 = document.createElement('h1')

// h1.innerHTML = 'Hello from JS'

// document.body.appendChild(h1)

// let h1 = React.createElement('h1', null, 'Hello from React!')

// let main = document.querySelector('#main')

// let root = ReactDOM.createRoot(main)

// root.render(h1)

let h1 = React.createElement('h1', null, 'Hello from Bhopal')
let h2 = React.createElement('h2', null, 'This is h2')

let div = React.createElement('div', {id: 'parent', class: 'elem'}, [h1,h2])

let root = ReactDOM.createRoot(document.querySelector('#main'))

root.render(div)