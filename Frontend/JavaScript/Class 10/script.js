// const image = document.getElementById('image')

//! Attribute manipulation
//? getAttribute()
// console.log(image.getAttribute('src'));
// console.log(image.getAttribute('height'));
// const imgSrc = image.getAttribute('src')

// //? setAttribute()
// image.setAttribute('class', 'thisIsImage class1 class2 class3')
// // console.log(image);
// image.setAttribute('src', 'https://cdn.pixabay.com/photo/2026/02/03/15/16/old-library-10102767_1280.jpg')
// image.style.border = '10px solid red'
// image.style.width = '400px'

const heading = document.querySelector('.heading')
heading.style.color = 'green'
heading.style.fontSize = '30px'
heading.style.backgroundColor = 'aqua'

// heading.innerHTML = '<h2> This is subheading </h2>'
// heading.innerText = 'This is text manipulation'
heading.textContent = 'This is Updated heading'

//! Insert a new Element
//? createElement()
const paragraph = document.createElement('p')
paragraph.textContent = 'This is a new paragraph'
paragraph.style.fontSize = '30px'
paragraph.style.color = 'red'

// console.log(paragraph);

const box = document.getElementById('box')
//? append()
// box.append(paragraph)

//? prepend()
// box.prepend(paragraph)

//? before()
// box.before(paragraph)
// heading.before(paragraph)

//? after()
// box.after(paragraph)
// heading.after(paragraph)

//! Remove an element
heading.remove()

//! Prompt()
// let name = prompt("Enter your name")

//! Alert()
alert("Warning")