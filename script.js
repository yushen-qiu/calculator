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

let a, b, operator

function operate(a, b, operator) {
    if (operator == '+') {
        add(a, b)
    } else if (operator == '-') {
        subtract(a, b)
    } else if (operator == '+') {
        multiply(a, b)
    } else if (operator == '+') {
        divide(a, b)
    }
}