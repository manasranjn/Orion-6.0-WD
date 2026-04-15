//! Export a Function as module
// const addition = (a, b) => {
//     console.log(a + b);
// }

// module.exports = addition;

//! Export multiple functions as module
const sum = (a, b) => {
    console.log(a + b);
}

const multiply = (a, b) => {
    console.log(a * b);
}

module.exports = {
    sum,
    multiply
}