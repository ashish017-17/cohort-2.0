// class Bottle{
//     constructor(){
//         this.color = "blue";
//         this.material = "plastic";
//         this.price = 500;
//     }

//     fill() {}
//     drink() {}

// }

// let bottle1 = new Bottle()
// let bottle2 = new Bottle()

// class Sketch{
//     constructor(){
//         this.character = "doremon";
//         this.color = "blue";
//     }
// }

// Sketch.prototype.speak = function(){}
// Sketch.prototype.walk = function(){}


// this value in
// global -> window

// console.log(this);

// function -> window

// function abcd(){
//     console.log(this);
// }

// abcd();

// es5 function inside object -> object

// let obj = {
//     name: "ashis",
//     func: function(){
//         console.log(this.name);
//     }


// }

// obj.func();

// es6 function inside object -> window

// let obj1 = {
//     fpnc: () => {
//         console.log(this);
//     }
// }

// obj1.fpnc();

// es5 function inside es5 function object -> window

// let obj2 = {
//     frnc: function(){

//         function abcd(){
//             console.log(this);
//         }

//         abcd();

//     }
// }

// obj2.frnc();

// es6 function inside es5 function object -> object

// let obj3 = {
//     name: "ashish",
//     course: "B.tech",
//     ftnc: function (){

//         let degf = () =>{
//             console.log(this);
//         }
        
//         degf();

//     }
// }

// obj3.ftnc();

// let h1 = document.querySelector("h1");

// h1.addEventListener('click',function(){
//     console.log(this)
// });

//  -----`call`, `apply`, `bind`

// ek function mein this ki value window hoti hai, agar aap chaahte ho ki wo value window naa ho par koi aur object ho tab aap use kr sakte ho call, apply, bind ka

let obj = {
    name: 'ashish',
    course: 'B.tech',
}


function abcd(a, b, c) {
    console.log(this,a,b,c);
}

// call -> fnc chalata hai and this ki value set karta hai

abcd.call(obj);

// apply -> wahi karta hai jo call karta hai and arguments mein pahli value this ki and doosri value array hoti hai

abcd.apply(obj, [1, 2, 3]);

// bind -> wahi karta hai jo call karta hai and aapko naya fnc deta hai

let newfnc = abcd.bind(obj, 1, 2, 3);

newfnc();