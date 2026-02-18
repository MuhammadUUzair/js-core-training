let num1 = 2
let num2 = 8
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    console.log("Add function called")
    let sum = num1 + num2;
    document.getElementById("sum-el") .textContent = "Sum is : "+sum
}
function subtract(){
    console.log("Subtract function called")
    let sum = num1 - num2;
    document.getElementById("sum-el") .textContent = sum
}
function divide(){
    console.log("Divide function called")
    let sum = num1 / num2;
    document.getElementById("sum-el") .textContent = sum
}
function multiply(){
    console.log("Multiply function called")
    let sum = num1 * num2;
    document.getElementById("sum-el") .textContent = sum
}
