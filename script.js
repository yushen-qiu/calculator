function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    console.log(a)
    console.log(b)
    console.log(operator)
    if (operator == '+') {
        return add(a, b)
    } else if (operator == '-') {
        return subtract(a, b)
    } else if (operator == '*') {
        return multiply(a,b)
    } else if (operator == '/') {
        return divide(a, b)
    }
}

let a = "0", b = "", operator = ""
let shouldClearDisplay = true;

const display = document.querySelector(".display");

const numbers = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator')

const equals = document.querySelector(".equals")

const clear = document.querySelector(".clear")

const decimal = document.querySelector(".decimal")

const del = document.querySelector(".delete")

const sign = document.querySelector(".sign")

function updateDisplay() {
    display.textContent = a + operator + b
}

updateDisplay()

numbers.forEach(number =>   
    number.addEventListener("click", () => {
        if (operator == "") {
            if (shouldClearDisplay) {
                a = number.textContent
                shouldClearDisplay = false;
            } else {
                if (a == 0 && !a.includes('.')) {
                    a = number.textContent
                } else {
                    a += number.textContent
                }
            }
        } else {
            b += number.textContent
        }
        updateDisplay()
    })
)

operators.forEach(o => 
    o.addEventListener("click", () => {
        if (a) {
            if (operator && b) {
                result = operate(Number(a), Number(b), operator).toFixed(6).replace(/\.?0+$/, '');
                a = result
                operator = ""
                b = ""
                if (result == Infinity || result == undefined || result == NaN) {
                    a = "ERROR"
                }
            } 
            operator = o.textContent
            
        }    
        updateDisplay()
    })
)

equals.addEventListener("click", () => {
    result = operate(Number(a), Number(b), operator).toFixed(6).replace(/\.?0+$/, '');
    a = result
    operator = ""
    b = ""
    shouldClearDisplay = true;
    
    if (result == Infinity || result == undefined || result == NaN) {
        a = "ERROR"
    }
    updateDisplay()
})


clear.addEventListener("click", () => {
    a = "0"
    operator = ""
    b = ""
    updateDisplay() 
})

decimal.addEventListener("click", () => {
    if (operator == "" && !a.includes(".")) {
        a += decimal.textContent
        shouldClearDisplay = false;
    } else if (operator != "" && !b.includes(".")) {
        if (!b) {
            b += "0"
        }
            b += decimal.textContent
    }
    updateDisplay() 
}) 


del.addEventListener("click", () => {
    if (operator == "" && a) {
        if (a.length != 1) {
            a = a.substring(0, a.length - 1)
        } else {
            a = "0"
        }
    } else if (operator != "") {
        if (!b) {
            operator = ""
        } else {
            b = b.substring(0, b.length - 1)
        }
    } 
    updateDisplay() 
}) 

sign.addEventListener("click", () => {
    if (operator == "") {
        if (a.includes("-")) {
            a = a.substring(1, a.length)
        } else {
            a = "-" + a
        }
    } else {
        if (b.includes("-")) {
            b = b.substring(1, a.length)
        } else {
            b = "-" + b
        }
    }
    updateDisplay() 
}) 