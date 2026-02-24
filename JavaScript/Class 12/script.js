//! Event Object

const button = document.getElementById('btn')

// button.onclick = (e) => {
//     console.log("Button Clicked");
//     button.style.backgroundColor = 'maroon'
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);

// }

const input = document.getElementById('input')
// input.onchange = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.target.value);

// }


//! Event Listner

// node.eventListner(eventType, ()=>{
// })

input.addEventListener('change', (e) => {
    console.log(e.target.value);
})

// button.addEventListener('click', () => {
//     console.log("Event listner added");
// })

// function handleClick() {
//     console.log("Hello");
// }

// button.addEventListener('click', handleClick)
// // button.removeEventListener('click', handleClick)

// setTimeout(() => {
//     console.log("Event removed");
//     button.removeEventListener('click', handleClick)
// }, 2000)

//! Prototype
const person1 = {
    name: "Allen", age: 20, address: "NY"
}

const person2 = {
    course: "MERN", skills: ["HTML", "CSS", "JS"], __proto__: person1, name: "Smith"
}
person2.newKey = "value"
console.log(person2.newKey);

console.log(person1.name);
console.log(person2.name);

const person3 = Object.create(person1)
console.log(person3.name);
person3.isWorking = false
console.log(person3.isWorking);
console.log(person2);
console.log(person3);

