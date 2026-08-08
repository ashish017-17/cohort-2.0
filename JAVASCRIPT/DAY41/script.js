
// # day -41 - JavaScript Questions

// ## **1. Higher-Order Function**

// Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

// function runTwice(fn){
//     fn();
//     fn();
// }

// runTwice(function(){
//     console.log("Hello");
// });

// ## **2. Pure & Impure Functions**

// Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

// function pure (a,b) {
//     console.log(a + b);
// }

// let global = 0;
// function impure(a){
//     global++;
//     console.log(a + global);
// }

// impure(2);
// impure(2);

// pure(1, 2);
// pure(1, 2);



// ## **3. Object Destructuring**

// Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

// function abcd({ name, age}) {
//     console.log(name, age);
// }

// abcd({ name: "Ashish", age: 27});


// ## **4. Normal Function vs Arrow Function (this Issue)**

// Demonstrate the difference between a normal function and an arrow function when used as object methods.

// have to revise



// ## **5. map() Task**

// Given an array of numbers, use `map()` to create a new array where each number is squared.

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map(function (val){
//     return val * val;
// });
// console.log(newarr);


// ## **6. filter() & reduce() Tasks**

// * Use `filter()` to get only even numbers from an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newarr = arr.filter(function(val){
//     return val % 2 === 0;
// });

// console.log(newarr);

// * Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// let salary = [134400, 20040, 30300];
// let ans = salary.reduce(function(acc, val){
//     return acc + val;
// }, 0);

// console.log(ans);

// ## **7. some() & every() Task**

// Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 characters).

// let names = ["om", "harsh", "nishi", "ashish", "swara"];

// let ans = names.some(function(val){
//     return val.length > 3;
// });

// let names = ["om", "harsh", "nishi", "ashish", "swara"];

// let ans = names.every(function(val){
//     return val.length > 3;
// });


// ## **8. Object.freeze() & Object.seal()**

// Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.



// ## **9. Nested Object Access**

// Create a nested object (`user → address → city`) and access the city name inside it.
