//? while loop
// initialization
// while (condition) {
//     instruction
//     updation
// }

// let i = 1
// while (i < 10) {
//     console.log(i);
//     i++
// }

//? do-while loop
// initialization
// do  {
//     instruction
//     updation
// }while(condition)

// let i = 100
// do {
//     console.log(i);
//     i--
// } while (i > 10)

//? for-of loop
let arr = [10, 20, 30, 40, 50, 60]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (e of arr/str){
//     instruction
// }

// for (item of arr) {
//     console.log(item);
// }

let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
// for (s of str) {
//     console.log(s);
// }


//? for-in Loop
// for(key in obj){
//     instruction
// }

let obj = {
    name: "Allen",
    age: 22,
    job: "SDE",
    address: "NY, USA",
    salary: "$12000.0"
}

// for (key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

// for (i in arr) {
//     console.log(i);
//     console.log(arr[i]);
// }

//! Function
//* Pre-Defined(In-Built)
// log(),reduce(),map(), replace()...
//* User-Defined
//? Normal Function
function sayHello() {
    return "Hello Everyone"
}

let f1 = sayHello()
// console.log(f1);

//* Function without parameter
function addition() {
    return 10 + 20
}
// console.log(addition());
// console.log(addition());
// console.log(addition());
// console.log(addition());
// console.log(addition());

//* Function with parameter
function sum(a, b) {
    return a + b
}
// console.log(sum(10, 20));
// console.log(sum(10, 200));
// console.log(sum(50, 30));

//? Arrow Function
// const functionName = ()=>{
//     instruction
// }

const multiplication = (a, b) => {
    return a * b
}
// console.log(multiplication(2, 3));
// console.log(multiplication(5, 3));
// console.log(multiplication(10, 20));

//* Function with default parameter
const total = (a = 0, b = 0) => {
    console.log("Value of a is ", a);
    console.log("Value of b is ", b);
    return a + b
}
// console.log(total(200));
// console.log(total());

//? Anonymous Function
const functionName = function () {
    instruction
}


//? Callback Function