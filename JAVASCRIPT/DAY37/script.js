//Function in Javascript

// function --> aapka code jo turant nahi chalega tab chalega jab aap usko call karoge

// aap us code ko baar baar use kar sakte ho

// Understanding Function in Javascript and why its widely used-[`parameters`, `arguments`, `rest parameters`, `hoisting`, `Variable Hoisting`, `Function Hoisting`]

// code ko reuse karne me help karta hai
// function aaapke code ko tab chalata hai jab aap chaaho

// function abcd (age, name) {
        // parameters
// }

// abcd(22, "Ashish"); // arguments

//-----------rest parameters-----------

// function abcd(a, b, ...c) {
//     console.log(a, b, c);
// }

// abcd(1,2,3,4,5,6,7,8,9,10);

//---------------hoisting---------------

// abcd();
//  function abcd() {
//     console.log("Hello World");
// }

// - Parameters in Javascript - [`required` , `destructured` , `default` , `rest`]

// function abcd (a, b, c, d){
        //agar aapne parameter banaaye and aapne arguments nahi bheje to fir wo value parameter ki undefined ho jaayegi
// }

// abcd();

// function abcd({name, age}) {
//     console.log(name, age);
// }

// abcd({name: "Ashish", age: 22}); // destructured parameters


// function abcd(...num) {
//     console.log(num);
// }

// abcd(1,2,3,4,5)

// default parameters
// function abcd(a=0, b=0, c=0) { 
//     console.log(a, b, c);
// } 

// abcd(1, 2);


// - Arguments in Javascript - [`positional` , `default` , `spread`]

//----------Positional----------------

// function abcd(a, b, c, d){
//         console.log(a, b, c, d);
// }

// abcd(1, 2, 3, 4);

//-----------Spread-----------------

// function abcd(a, b, c, d){
//         console.log(a, b, c, d);
// }

// let arr = [1, 2, 3, 4]
// abcd(...arr);


// - `Classic Function`, `Nested Function` (function within function), `Scope Chain` in Javascript

// function abcd (){

// }                        //Calssic function

// function abcd(){

//         function defg() {
//                 console.log("defg");
//         }

//         defg();
// }

// abcd();                 //Nested function


// let a = 12;
// function abcd (){

//         let b = 13;
//         function defg(){
//                 console.log(b);
//                 console.log(a);
//         }
//         defg ();
// }

// abcd();                   //Scope chain


// - Understanding Immediately Invoked Function Expression (IIFE).

// (function (){
//         console.warn("hello");
// }) (); 


// - More Function in Javascript - [`Arrow Function`, `Fat Arrow`, `Anonymous`, `Higher Order`, `Callback`, `First Class`, `Pure Function`, `Impure Function`]


// let fnc = () => {
//         console.log("Hello");
// };

// fnc();


// Higher order function -> ek aisa function jo ki return karde ek aur function yaaa wo function accept karle ek aur function parameter mein

// function abcd () {
//         return function(){
                 
//         }

// }                             // HOF


// function abcd (a) {

// }

// abcd(function(){

// });                           // HOF


// First class function ek concept hai  -> function uss language mein variable ki tarah use ho sakte hai

// let a = function(){

// };

// function abcd(a, b){

// }

// abcd(function(){

// },2)