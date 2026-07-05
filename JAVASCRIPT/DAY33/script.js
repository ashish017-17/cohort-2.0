// 1.  Print numbers from 1 to 10
//     Loop from 1 to 10 and Print each numbers 

// for (let i= 1; i<=10; i++){
//     console.log(i);
// }

// 2.  Print only even numbers from 1 to 20
//     use a loop and conditions to print only even ones

// for (let i = 1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// for (let i = 2; i<=20; i+=2){
//     console.log(i);
// }

// 3.  Print number from 10 to 1
//     Reverse loop with a decrement.

// for (let i = 10; i>=1; i--){
//     console.log(i);
// }

// 4.  Print the word "yes" 5 times
//     Repeat using a loop.

// for (let i = 1; i<=5; i++){
//     console.log("Hello");
// }

// 5.  Print Whether number from 1 to 10 are even or odd
//     For each number, check -> "Even", else -> "odd"

// for (let i = 1; i<=10; i++){
//     if(i % 2 === 0){
//         console.log(`${i} - is even`)
//     }
//     else{
//         console.log(`${i} - is odd`)
//     }
// }

// 6.  Ask user for a number and say if it's positive or negative
//     Use prompt() and a conditional.

// let num = +prompt("Give me a number");
// if(num > 0){
//     console.log(`${num} is a Positive number`);
// }
// else{
//     console.log(`${num} is a Negative number`);
// }

// 7.  Ask user's age and check if eligible to vote
//     If age >= 18 -> "Eligible", else -> "Not eligible"

// let age = prompt("Age ?");
// if(age === null){
//     console.error("You pressed cancel");
// }
// else if(age.trim() === ""){
//     console.error("You have pressed too many spaces");
// }
// else{
//         age = Number(age.trim());
//     if(isNaN(age)){
//         console.error("Write you age in Number.");
//     }
//     else if(age >= 18){
//         console.log(`${age} you are eligible for vote.`);
//     }
//     else{
//         console.log(`${age} you are not eligible for vote.`);
//     }
// }

// 8.  Print multiplication table of 5
//     use loop to print 5 x 1 to 5 x 10.

// for (let i = 1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// 9.  Count how many numbers between 1 and 15 are greater than 8
//     Loop and count conditionally.

// let count = 0;
// for (let i = 1; i<=15; i++){
//     if (i>8 && i<15){
//         count++;
//         console.log(count);
//     }
    
// }