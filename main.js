let root = document.getElementById('root')

let display = document.getElementById('display')
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
let decimal = document.getElementById('decimal')
//add an if statement? Include function? display.inner

equals.addEventListener('click', () => {
   display.innerText = eval(display.innerText)
})

clear.addEventListener('click', () => {
    location.reload()
 })


decimal.addEventListener('click', () => {
        display.innerText += decimal.innerText
      })