// 7.  Ask user's age and check if eligible to vote
//     If age >= 18 -> "Eligible", else -> "Not eligible"

// let age = prompt("Enter your age");

// if (age === null) {
//         console.error("You pressed cancel");
//     }
//     else {
//         if(age.trim() === "") {
//         console.error("Not a Valid age");
//     }
//     else{
//         age = Number(age.trim());
//         if (isNaN(age)) {
//         console.error("Not a Valid age");
//     }

//     else{
//         if (age >= 18){
//             console.log(`your age is ${age} you are eligible for vote.`);
//         }
//         else{
//             console.error(`your age is ${age} you are Not eligible for vote.`);
//         }
//     }
//     }
// }


// 8.  Print multiplication table of 5
//     use loop to print 5 x 1 to 5 x 10.

// for (let i = 1; i<=10; i++){
//     console.log(`5 x ${i} = ${5 * i}`)
// }

// for (let i = 1; i<=10; i++){
//     console.log(`38 x ${i} = ${38 * i}`)
// }


// 9.  Count how many numbers between 1 and 15 are greater than 8
//     Loop and count conditionally.

// let count = 0;

// for (let i = 1; i<=15; i++){
//     if(i > 8){
//         count++;
//     }
// }

// console.log(`${count}`);


// 10. Ask user for password and print access status
//     Hardcoded correct password. Compare with user input.

// let password = "harshbahi";

// let pass = prompt("password");

// if (pass === null) {
//     console.error("you cancelled it");
// }
// else{
//     if(pass === password){
//         console.log("matched");
//     } else {
//         console.log("not matched");
//     }
// }







//  Level 2 - Slightly Tougher but Logical
//  11. Allow only 3 attempts to enter correct password
//     If user gets it right early, stop. If not -> "Account locked"


