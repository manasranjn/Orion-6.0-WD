//! Export one Function as module
// const addition = (a, b) => {
//     console.log(a + b);
// }

// export default addition;

//! Export Multiple Functions as module
// export const addition = (a, b) => {
//     console.log(a + b);
// }

// export const subtraction = (a, b) => {
//     console.log(a - b);
// }

const addition = (a, b) => {
    console.log(a + b);
}

const subtraction = (a, b) => {
    console.log(a - b);
}

export default {
    addition,
    subtraction,
    name: "Math Module",
    marks: 250
}