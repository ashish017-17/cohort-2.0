// ### Loops & Conditionals in Javascript

// conditionals
// if else
// truthy and falsy
// 0 "" false NaN null undefined document.all
// kuchh bhi dikhe -> true

// if(12) {
//     console.log("hey") ;
// } else {
//     console.log("hello");
// }

// let a = 9;
// if(a>10){
//     console.log("hello");
// }
// else{
//     console.log("byebye");
// }


// else-if
// if (12>13) {
//     console.log("if chala");
// } else if (13 > 14) {
//     console.log("else if chala");
// } else if (14 < 15) {
//     console.log("else if 2 chala");
// } else {
//     console.log("else chala");
// }

//Ternary Operator 
//condition ? true : false

//12 < 13 ? console.log("hey") : console.log("hello");

//switch-case
// switch(2){
//     case 1:
//         console.log("This is case 1");
//         break;
//     case 2:
//         console.log("This is case 2");
//         break;
//     case 3:
//         console.log("This is case 3");
//         break; 
//     case 4:
//         console.log("This is case 4");
//         break;
//     default:
//         console.log("This is default");
// }


// programming mein kai baar aisa phase aata hai jaha par aapko decide karna padta hai ki kya karein, option A choose kare ya option B choose karein
// agar baarish ho rahi hai to print karo hello nahito print karo bye-bye
// if else else-if ternary switch-case

// user password do -> password agar sahi hai to accepted nahito error

// - Understanding Condition Operator in Javascript - [`if` , `else` , `if-else` , `else-if` , `Ternary Operator` , `switch` ]


// loops = repeat karna
// loop ke use cases mein do prakaar
// 1 3 5 7 9 11 13 15 17 19
// 0 1 1 2 3 5 8 13 21 34...



// - `for` Loop in JavaScript
// - `while` Loop in JavaScript
// - `do...while` in JavaScript
// - `forEach` in JavaScript
// - `for in` Loop in JavaScript
// - `for of` Loop in JavaScript
// - Recursion in JavaScript
// - Loop control Statements - [`break` , `continue`]

// straightforward loops -> naa hi value badalti hai naa hi printing badalti hai
// dynamic loop -> value badal sakti hai and printing bhi badal sakti hai
// jab koi ek hi cheej kitni baar print honi hai isse koi farak nahi padta ki tumhara loop ki I ki value kaha se shuru ho rahi hai

// for loop

// for(let i = 1; i<50; i++){
//     console.log("1");
// }

// 1 2 3 4 5 

// for(let i =1; i<=5; i++){
//     console.log(i);
// }


// for(let i =5; i>=-5; i--){
//     console.log(i);
// }

// 121 - 12
// for(let i = 121; i>=12; i--){
//     console.log(i)
// }

// 12 - 1 without 5 and 7

// for (let i = 12; i>=1; i--){
//     if( i === 5 || i === 7){}
//     else console.log(i);
// }