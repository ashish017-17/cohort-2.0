// - Introduction to Error Handling
// - Common types of errors in JavaScript -[`Syntax error` , `Runtime error` , `Logical errors`]
// - Understanding the Error object - [`message` , `name` , `stack`]
// - Handaling exception using `try-catch` , `try-catch-finally`
// - How to Throw Errors in JavaScript
// - Error Handaling in Asynchronous Code



// syntax error -> aapne code mein likthe waqt galti kardi(likhne ke format me galti)

// runtime error -> code likhte waqt error nahi hai chalte waqt error hai

// function abcd(){
//     let a = 12;
//     console.log(a.name.first);
// }

// abcd();

// logical error -> aapke code ko kuchh karna chahiye tha par wo kar kuchh aur raha hai

// function add(a,b){
//     return a - b;
// }

// console.log(add(10,5));


// try {

//     let a = 12;
//     console.log(a.name.age);

// } catch (err) {

//     console.error(err.message);

// }


// try {

//     let b = 12;
//     console.log(b);

// } catch (err) {

//     console.error(err.message);

// } finally {
//     console.log("hey");
// }

// - How to Throw Errors in JavaScript

// throw new Error("something went wrong")

// try {

//     let a = 12;
//     console.log(a.name.age);

// } catch (err) {

//     console.log(new Error("Something Went Wrong from our side, please wait for some time."));

// }}}}