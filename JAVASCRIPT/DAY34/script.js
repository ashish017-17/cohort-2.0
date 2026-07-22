// 7.  Ask user's age and check if eligible to vote
//     If age >= 18 -> "Eligible", else -> "Not eligible"

// let age = prompt("Age ?");

// if(age === null){
//     console.error("You pressed cancel");
// }
// else if(age.trim() === ""){
//     console.error("Please write something");
// }
// else{
//         age = Number(age.trim());
//     if(isNaN(age)){
//         console.error("Write you age in Number.");
//     }
//     else if(age < 0){
//         console.error(`${age} Invalid age.`);
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
//     if (i > 8){
//         count++;    
//     }
// }
// console.log(count);

// 10. Ask user for password and print access status
//     Hardcoded correct password. Compare with user input.

// let password = "Ashish";

// let pass = prompt("Password ?");

// if (pass === null){
//     console.error("You pressed cancelled");
// }

// else if (pass === password){
//     console.log("correct password");
// }
// else{
//     console.log("Wrong Password");
// }

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
//     If user gets it right early, stop. If not → “Account locked”

let attempts = 0;
let account = false;
let pass = "Ashish";

let password = prompt("Password");
attempts++;

if (password === pass) account = true;

while(password !==pass){
    if (attempts === 3){
        console.error(`Attempt over ${attempts}`);
        console.error("account locked!");
        break;
    }
    password = prompt("Password");
    if (password === pass) account = true;
    attempts++;
}

if (account === true) console.log("Welcome!");