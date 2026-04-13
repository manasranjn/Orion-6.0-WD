// console.log(window);
// console.log(document);

//! DOM Selection Methods
//? getElementById()
const headingEle = document.getElementById('heading')
// console.log(headingEle);

//? getElementsByClassName()
const headings = document.getElementsByClassName('head')
// console.log(headings);

//? getElementsByTagName()
const elements = document.getElementsByTagName('h1')
// console.log(elements);

//? getElementsByName()
const nameElements = document.getElementsByName('email')
// console.log(nameElements);

//? querySelector()
// const qElem = document.querySelector('#heading')
// const qElem = document.querySelector('.head')
// const qElem = document.querySelector('h1')
// console.log(qElem);

//? querySelectorAll()
const allElements = document.querySelectorAll('.head')
console.log(allElements);
