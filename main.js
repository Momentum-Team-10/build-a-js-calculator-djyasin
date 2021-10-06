let root = document.getElementById('root')

let display = document.getElementById('display')

let button1 = document.getElementById('button-1')
let button2 = document.getElementById('button-2')
let button3 = document.getElementById('button-3')
let button4 = document.getElementById('button-4')
let button5 = document.getElementById('button-5')
let button6 = document.getElementById('button-6')
let button7 = document.getElementById('button-7')
let button8 = document.getElementById('button-8')
let button9 = document.getElementById('button-9')

let buttons = document.querySelectorAll('.number-button')
console.log(buttons)

for (let button of buttons) {
    button.addEventListener('click', () => {
        display.innerText += button.innerText
    })
}

let equals = document.getElementById('equals')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let subtract = document.getElementById('subtract')

equals.addEventListener('click', () => {
   display.innerText = eval(display.innerText)
})


