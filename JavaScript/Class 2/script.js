//! Data types in JS
//* Primitive Type
//? Number
let a = 10
let b = -10
let c = 2.5
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

//? String
let s1 = "Hello"
let s2 = 's'
let s3 = '123456789'
// console.log(typeof (s1));
// console.log(typeof (s2));
// console.log(typeof (s3));

//? Boolean
let b1 = true
let b2 = false
// console.log(typeof b1);
// console.log(typeof b2);

//? Undefined
let x
const y = undefined
// console.log(y);
// console.log(typeof x);
// console.log(typeof y);

//? Null
let n = null
// console.log(typeof n);
// console.log(n);

//? BigInt
let d = BigInt(12345678987654321)
// console.log(typeof d);

//? Symbol
let e = Symbol(1234567)
let f = Symbol("sjhdfbjhdsb")
// console.log(typeof e);
// console.log(typeof f);
// console.log(e);
// console.log(f);

//* Reference type/ Non-Primitive Type
//? Array
let arr = [1, true, undefined, 'Hello', 3, 4]
// console.log(arr[3]);

let str = 'Good Evening'
// console.log(str.length);
// console.log(arr.length);

//? Object
let obj = {
    name: 'Manas',
    age: 10,
    designation: "SDE",
    address: {
        state: "Odisha",
        country: "India",
    }
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj['designation']);
// console.log(obj.address.state);

//? Function
function example() {
    console.log("This is a function");
}
