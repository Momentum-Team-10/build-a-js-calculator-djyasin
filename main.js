Let root = document.getElementById(‘root’)

let display = document.getElementById('display')

let button-1 = document.getElementById('button-1')
let button-2 = document.getElementById('button-2')
let button-3 = document.getElementById('button-3')
let button-4 = document.getElementById('button-4')
let button-5 = document.getElementById('button-5')
let button-6 = document.getElementById('button-6')
let button-7 = document.getElementById('button-7')
let button-8 = document.getElementById('button-8')
let button-9 = document.getElementById('button-9')
let buttons = document.querySelectorAll('.number-button')
console.log(button-1.innerText)
console.log(buttons)
for (let button of buttons) {
    button.addEventListener('click', () => {
        display.innerText += button.innerText
    })
}

let equals = document.getElementById('equals')

equals.addEventListener('click', () => {
   display.innerText = eval(display.innerText)