//! Conditional Statements
//? Simple if Statement
// if conditon{
//     statement
// }

// console.log("This is Simple If");
// let num = -10
// if (num > 0) {
//     console.log("Number is positive");
// }

//? if-else Statement
// if condition{
//     statement
// }else{
//     statement
// }

// let num = 0
// if (num > 0) {
//     console.log("Number is positive");
// } else {
//     console.log("Number is negative");
// }

//? else-if Statement
// if condition{
//     statement
// }else if condition{
//     statement
// }else{
//     statement
// }

// let num = 0
// if (num > 0) {
//     console.log("Number is positive");
// } else if (num < 0) {
//     console.log("Number is negative");
// } else {
//     console.log("Number is 0");
// }

// let age = Number(prompt("Enter Your age"))
// if (age > 0 && age < 18) {
//     console.log("You'r a kid");
// } else if (age >= 18 && age < 55) {
//     console.log("You'r an adult");
// } else if (age >= 55 && age < 100) {
//     console.log("You'r senior citizen");
// } else if (age > 100) {
//     console.log("You'r dead");
// } else {
//     console.log("Invalid age");
// }

//? Switch Case
// initialization
// switch(value){
//     case 1:
//         stmnt
//         break
//     case 2:
//         stmnt
//         break
//     .
//     .
//     .
//     default:
//         stmnt
// }

// let x = 2
// switch (x) {
//     case 1:
//         console.log("Case 1");
//         break
//     case 2:
//         console.log("Case 2");
//         break
//     case 3:
//         console.log("Case 3");
//         break
//     default:
//         console.log("Default Case");
// }

//! Loops
//? for loop
// for(initialization; condition; updation){
//     statement
// }

// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

//* Write a program to display even numbers from 10 to 100

// for (let i = 10; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//* Write a program to display prime numbers from 10 to 100
let isPrime = false
let num = 1
for (let i = 10; i <= 100; i++) {
    if (i % 2 !== 1) {
        console.log(i);

    }
}