// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => {
//             const data = res.json()
//             console.log(data);

//             // .then((data) => {
//             //     console.log(data);
//             // })
//             // .catch((err) => {
//             //     console.log("Failed to get the data");
//             // })
//         }).catch((err) => {
//             console.log("Failed to fetch data from API", err);
//         })
// }
// console.log(x);


// getData()

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts') // 1
    console.log(res); //1

    const data = await res.json() //1
    console.log(data); //1
}

// getData()

//! Hoisting
//? Variable Hoisting
// console.log(a);
let a
// console.log(a);
// a = 30
// console.log(a);
// console.log(x);

var x
// console.log(x);
x = 20
// console.log(x);

//? Function Hoisting
// greet()
// const greet = () => {
//     console.log("hello Everyone");

// }
// greet()

// sayHello()

// function sayHello() {
//     console.log("Hello everyone");
// }
// sayHello()


async function getApiData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts') // 1
    // console.log(res); //1

    const data = await res.json() //1
    // console.log(data); //1

    const box = document.getElementById('box')

    data.forEach((item) => {
        const heading = document.createElement('h2')
        const paragraph = document.createElement('p')

        heading.textContent = item.title
        paragraph.textContent = item.body

        box.append(heading)
        box.append(paragraph)
    })

}

getApiData()


