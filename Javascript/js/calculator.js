function add() { 
    let num1 = parseFloat(document.querySelector("#firstNumber").value); 
    let num2 = parseFloat(document.querySelector("#secondNumber").value);
    let sum = num1 + num2; 
    document.querySelector("#result").value = sum; 
}

let addbtn = document.querySelector("#add"); 
addbtn.addEventListener("click",add); 

function subtract() { 
    let num1 = parseFloat(document.querySelector("#firstNumber").value); 
    let num2 = parseFloat(document.querySelector("#secondNumber").value);
    let subtract = num1 - num2;
    document.querySelector("#result").value = subtract; 
}

let subtractbtn = document.querySelector("#subtract"); 
subtractbtn.addEventListener("click",subtract); 





