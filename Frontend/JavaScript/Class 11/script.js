function sayHello() {
    console.log("Button Clicked");
    console.log(10 + 20);
}

const button2 = document.getElementById('btn2')
button2.ondblclick = () => {
    console.log("This is double click button");
}

const heading = document.getElementById('heading')
const button = document.getElementById('btn')
button.onclick = () => {
    console.log("button is clicked");
    heading.textContent = 'Button is Clicked'
    heading.style.color = 'red'
    button.style.backgroundColor = 'green'
}

const box = document.getElementById('box')
const button3 = document.getElementById('btn3')
box.style.backgroundColor = 'black'

button3.onclick = () => {
    // box.style.backgroundColor = 'white'
    if (box.style.backgroundColor == 'black') {
        box.style.backgroundColor = 'white'
    } else if (box.style.backgroundColor == 'white') {
        box.style.backgroundColor = 'black'
    }
}

const newHeading = document.createElement('h2')
newHeading.textContent = 'New Element Created'
const newButton = document.getElementById('new')

newButton.onclick = () => {
    newHeading.style.color = 'white'
    box.append(newHeading)
}