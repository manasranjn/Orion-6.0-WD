// console.log("Hello Everyone");

// var
// var a = 10
// console.log(a);
// var a = 20
// console.log(a);
// a = "Hello"
// console.log(a);

// let
let b = 10
// console.log(b);
// let b
b = 30
// console.log(b);

// const
const c = 1
// const c
// c = 10
// console.log(x);

// y = 10


const box = document.querySelector('.box')
const button = document.getElementById('btn')

button.onclick = () => {
    console.log("Hello");
    // box.style.backgroundColor = 'white'

    box.style.backgroundColor === "black" ? box.style.backgroundColor = 'white' : box.style.backgroundColor = 'black'

    // if (box.style.backgroundColor === 'black') {
    //     box.style.backgroundColor = 'white'
    // } else {
    //     box.style.backgroundColor = 'black'
    // }
}