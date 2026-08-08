// - Recognise How Objects Are Stored Traverse Keys of an Object Array as Object.
// - Timing Events - `setTimeout()` , `setInterval()` , `clearTimeout` , `clearInterval()`

// - Operation in objects - [`freeze` , `seal` , `destructuring` , `object methods` , `this keyword`]




// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function sayHello(){
//     console.log("Hello");
// }

// sayHello();


// 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a, b){
//     return a + b;
// }

// let ans = add(5,4);
// console.log(ans);


// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

// function sayHello(name = "Guest"){
//     console.log(`Hii ${name}`);
// }

// sayHello("Ashish");


// 4. Use rest parameters to make a function that adds unlimited numbers.

// function addUnlimited(...nums){
//     let sum = 0;
//     nums.forEach(function (val){
//         sum = sum + val;
//     });
//     console.log(sum);
// }

// addUnlimited(1,2,3,4,5,6)

// function addUnlimited(...nums){
//     let sum = 0;
//     for(let i = 0; i<nums.length; i++){
//         sum = sum + nums[i];
//     }
//     console.log(sum);
// }

// addUnlimited(1,2,3)

// function addUnlimited(...nums){
//     let ans = nums.reduce(function (acc, val){
//         return acc + val;
//     },  0);
//     console.log(ans);
// }

// addUnlimited(1, 2, 3);

// 5. Create an IIFE that prints `"I run instantly!"`.

// (function () {
//     console.log("I run instantly!" );
// })();


// 6. Make a nested function where the inner one prints a variable from the outer one.

// function parent(){
//     let a = 12;
//     function child(){
//         console.log(a);
//     }
//     child();
// }
// parent();



// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let arr = ["apple", "guava", "grapes", "mango", "pineapple"];
// arr.push("banana");
// arr.shift();


// 8. Use a `for` loop to print all elements of an array.

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

// let obj = {
//     name: "Ashish",
//     age: 22,
//     city: "Patna"
// };

// for (let key in obj){
//     console.log(key , obj[key]);
// }


// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

// setTimeout(function (){
//     console.log("Time's up");
    
// }, 2000)