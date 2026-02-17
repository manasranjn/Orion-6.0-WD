// Write a program to check prime numbers between 1 and 100.
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
//         console.log(i);
//     }
// }

// Write a program to check even or odd numbers between 1 and 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let arr = [10, 40, 50, 1, 60, 20, 30, 70, 80, 90]
// //! map()
// let newArr = arr.forEach((item, index) => {
//     // console.log('Value of index', index, "is", item);

//     return item + 10
// })
// console.log(newArr);

// let newMarks = arr.map((mark, idx) => {
//     console.log(idx, mark);

//     return mark + 10
// })
// console.log(newMarks);


//! filter()
// let Marks = arr.map((mark, idx) => {
//     // console.log(idx, mark);

//     // return mark >= 50
//     if (mark >= 50) {
//         return mark
//     }
// })
// console.log(Marks);

// let Marks = arr.filter((mark, idx) => {
//     return mark >= 50
// })
// console.log(Marks);

//! reduce()
let total = arr.reduce((item, sum) => sum += item, 0)
console.log(total);
// let sum = 0
// sum += 10 // 10
// sum += 20 // 10 +20 = 30
// sum += 30 // 30 +30 = 60
// sum += 40 // 60 +40 = 100


//! sort()
let arr = [10, 40, 50, 1, 60, 20, 30, 70, 80, 90]
//? Asscending
// arr.sort((a, b) => a - b)
// a = 10, b = 40
// a = 40, b = 50
// a = 50, b = 1
// a= 50, b=60

//[10,40,1, 50, 20, 30, 60,70...]
//[10,1,40,20,30,50....]
//[1,10,20,30,40...]
// console.log(arr);

//? Descending
[10, 40, 50, 1, 60, 20, 30, 70, 80, 90]
a = 10
b = 40 //40-10 50-10 1-10
arr.sort((a, b) => b - a)
//[40,50, 10,60, 20,30,70...1 ]
//[50, 40, 60, 20, 30..., 10,1]
//[50, 60, 40, 30, 70,80,90, 20, 10,1]
//[60, 50, 40, 70, 80, 90, 30, 20,10,1]
//[60, 50, 70, 80, 90, 40...]
//[60, 70, 80, 90, 50, 40...]
//[70, 80, 90, 60, 50...]
//[80, 90, 70, 60....]
//[90, 80, 70, 60, 50,...]
console.log(arr);