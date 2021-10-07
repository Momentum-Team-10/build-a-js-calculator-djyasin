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
let decimal = document.getElementById('decimal')
//add an if statement? Include function? display.inner

equals.addEventListener('click', () => {
   display.innerText = eval(display.innerText)
})

clear.addEventListener('click', () => {
    location.reload()
 })

 //decimal.addEventListener('click', () => {
  //  display.innerText += decimal(display.innerText)
 // if (calculator.displayValue.includes(decimal)) {
  //  Append the decimal point
// calculator.displayValue += decimal;
//}
//}
 //})

//function inputDecimal(decimal) {
//If the 'displayValue' property does not contain a decimal point
 //  if (calculator.displayValue.includes(decimal)) {
  //      Append the decimal point
 //    calculator.displayValue += decimal;
 //   }
  //}

 //if (target.classList.contains('decimal')) {
 //   console.log('decimal', target.value);
//    return;
 // }
 //function Dot()                  //PUT IN "." if appropriate.
// {
 //   if ( Current.length == 0)     //no leading ".", use "0."
 //     { Current = "0.";
  //    } else
  //    {  if ( Current.indexOf(".") == -1)
  //         { Current = Current + ".";
  //    };   };
  //  document.Calculator.Display.value = Current;
 //  }
  