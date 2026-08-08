// - More Function in Javascript - [`Anonymous`, `Higher Order`, `Callback`, `First Class`, `Pure Function`, `Impure Function`]

// - Understanding Scoping in JS - [`Global scope` , `Function scope`]

// - Understanding `Closures` , `Scoping Rule`

// closure -> ek function hai jo return karta hai function but returning function jo hai wo parent ka koi variable use karega

// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// What are Arrays in JavaScript 

// arrays -> ek se jaada members rakhne ki jagah

// let arr = [21, 42, 73, 44, 54, 96];
// console.log(arr[5]);

// How to create an Array?

// let arr = [];
// let arr2 = new Array();


// - Understand How to Accessing Elements in Array.

// let arr = [21, 42, 73, 44, 54, 96];
// arr[5];

// - Function on Arrays - [`push` , `pop` , `shift` , `unshift` , `indexOf` , `array destructuring` , `filter` , `some` , `map` , `reduce` , `spread operator` , `slice` , `reverse` , `sort` , `join` , `toString`]


// let arr = [ 1, 2, 3, 4, 55]
// arr.indexOf(55);

// - Iterating Over Arrays using - [`For Loop` , `forEach`]

// let arr = [1, 2, 3, 4];
// for (let i = 0; i < 4; i++) {
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4];
// arr.forEach(function (val){
//     console.log(val);
// });


// - Understanding What are Objects in JavaScript - [`key-value pair`]

// let obj = {
//     name    : "Ashish",
//     age     :  22,
//     email   :  "ashish@gmail.com"
// };

// let obj2 = new Object();


// - Creating Object, Accessing Properties, Deleting Property and Nested Objects.

// let obj = {
//     name    : "Ashish",
//     age     :  22,
//     email   :  "ashish@gmail.com"
// };

// obj.name
// obj['name']

// delete obj.name;

// let obj = {
//     name: "Ashish",
//     socials: {
//         instagram: "ashish______17",
//         facebook: "ashish1723"
//     }
// };

// obj.socials.facebook