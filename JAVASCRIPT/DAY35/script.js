// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
//     If user gets it right early, stop. If not → “Account locked”

// let attempts = 0;
// let account = false;
// let pass = "Ashish";

// let password = prompt("Password");
// attempts++;

// if (password === pass) account = true;

// while(password !==pass){
//     if (attempts === 3){
//         console.error(`Attempt over ${attempts}`);
//         console.error("account locked!");
//         break;
//     }
//     password = prompt("Password");
//     if (password === pass) account = true;
//     attempts++;
// }

// if (account === true) console.log("Welcome!");

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 12. Ask user for words until they type “stop”. Count how many     times they typed “yes”
//     Loop until "stop" is typed. Count "yes".

// let word = prompt("Word ?");
// let count = 0;

// while(word !== "stop"){
//     if (word === "yes") count++;
//     word = prompt("Word ?");
// }

// console.log(`Total ${count}`);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 13. Print numbers divisible by 7 from 1 to 50
//     Use modulo % and loop.

// for (let i = 1; i<=50; i++){
//     if (i % 7 === 0){
//         console.log(i);
//     }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 14. Sum of all odd numbers from 1 to 30
//     Add only odd numbers. Print final sum.

// let sum = 0;

// for (let i = 1; i<=30; i++){
//     if (i % 2 !==0) {
//         sum = sum + i;
//     }
// }

// console.log(sum);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 15. Keep asking number until user enters an even number
//     Use while loop. Stop only if input is even.

// let num = prompt("Give Number.");
// num = Number(num);

// while (num % 2 !== 0){
//     num = prompt("Give Number.");
//     num = Number(num);
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 16. Print numbers between two user inputs
//     Input start and end using prompt() → print all between.

// let start = prompt("start");
// let end = prompt("end");

// if (start > end){
//     console.error("Start can not be bigger than end");
// }

// for (let i = start; i<=end; i++){
//     console.log(i);
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 17. Print only first 3 odd numbers from 1 to 20
//     Use loop. Stop with break after 3 odd prints.

// let count = 0;

// for (let i = 1; i<=20; i++){
//     if(i % 2 !== 0){
//         count++;
//         console.log(i);
//     }
//     if (count === 3){
//         break;
//     }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 18. Ask user 5 numbers. Count how many are positive
//     Use loop + condition + counter.

// let count = 0;

// for ( let i = 1; i<=5; i++){
//     let num = +prompt("Give number");
//     if (num >= 0) count++;
// }

// console.log(count);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 19. ATM Simulator – Allow 3 withdrawals
//     Start with ₹16000 balance. Ask withdrawal amount 3 times.
//     If enough balance → deduct
//     Else → print “Insufficient balance”

// let balance = 16000;
// let flag = false;

// let count = 0;
// while(balance > 0 && count !==3){
//     let withdraw = +prompt("Withdrawal Ammount");
//     count++;

//     if(withdraw <= balance){
//         balance -= withdraw;
//     }

//     else{
//         flag = true;
//         break;
//     }
// }

// if (flag === true){
//     console.log("Insufficient Amount");
// }

// console.log(`Current Balance is ${balance}`);