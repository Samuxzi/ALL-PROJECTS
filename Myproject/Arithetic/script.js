let num1 = document.getElementById("map")
let num2 = document.getElementById("nap")
let result= document.getElementById("save-el")
let x=25
let y=30
num1.textContent =x
num2.textContent =y

function Add(){
let total= x+y
result.textContent+= total
}
function Subtract(){
    let total= x-y
    result.textContent+= total
}
function Multiply(){
    let total= x*y
    result.textContent+= total
}
function Div(){
    let total= x/y
    result.textContent+= total
}