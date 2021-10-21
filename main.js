let root = document.getElementById("root");

let display = document.getElementById("display");
let buttons = document.querySelectorAll(".number-button");
let equals = document.getElementById("equals");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let subtract = document.getElementById("subtract");
let decimal = document.getElementById("decimal");
let meaningOfLife = prompt("What is the meaning of life?", 1);



for (let button of buttons) {
  button.addEventListener("click", () => {
    display.innerText += button.innerText;
  });
}

equals.addEventListener("click", () => {
  display.innerText = eval(display.innerText);
});

clear.addEventListener("click", () => {
  location.reload();
});

decimal.addEventListener("click", () => {
  display.innerText += decimal.innerText;
});

if (meaningOfLife < 42) {
  message = "Incorrect!";
} else if (meaningOfLife > 42) {
  message = "Incorrect";
} else if ((meaningOfLife = 42)) {
  message = "So long, and thanks for all the fish!";
} else {
  message = "Incorrect";
}
alert(message);
