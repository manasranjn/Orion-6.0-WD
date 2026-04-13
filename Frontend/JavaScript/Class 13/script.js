//! Class in JS
class Example {
    sayHello() {
        console.log("This is a function");
    }
}

//! Object
const e1 = new Example()
// e1.sayHello()

//! Constructor
class Vehicle {
    constructor(name, color) {
        this.vehicleName = name
        this.color = color
    }

    details() {
        console.log(`Vehicle name is ${this.vehicleName}, and the color is ${this.color}`);
    }
}

const car = new Vehicle('Car', 'Red')
// car.details()

const bike = new Vehicle('Bike', 'Black')
// bike.details()
// console.log(bike.vehicleName);

//! Inheritance
class Parent {
    info() {
        console.log("This is a Parent Class method");
    }
}
class Child extends Parent {
    details() {
        console.log("This is a Child class method");
    }

    //? Method overriding
    info() {
        console.log("Method body changed");
    }
}
const c1 = new Child()
// c1.info()
// c1.details()

//! Error
//? Syntax Error
// clas CName{

// }

//? Runtime error
a = 10 / 2
b = 10 / 0
// console.log(a);
// console.log(b);

//? Logical error
// console.log("Addition Value of 10 and 2 is ", 10 - 2);

//! Exception Handling
try {
    // let s = Number(prompt("Enter a string"))
    console.log(s.toLowerCase());
} catch {
    console.log("Number can't be changed in lowercase");
} finally {
    console.log("Finally block always executes");
}