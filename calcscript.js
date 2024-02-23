const resultEl = document.getElementById('result');
let currentNumber = '';
let operator = null;

function appendNumber(number) {
    currentNumber += number;
    resultEl.value = currentNumber;
}

function setOperator(op) {
    if (operator || currentNumber === '') return;
    operator = op;
    currentNumber += ' ' + operator + ' ';
    resultEl.value = currentNumber;
}

function calculateResult() {
    if (operator === null || currentNumber.slice(-2) === ' ') return;
    try {
        const result = eval(currentNumber);
        resultEl.value = result;
        currentNumber = '' + result;
        operator = null;
    } catch (error) {
        resultEl.value = 'Error';
        currentNumber = '';
        operator = null;
    }
}

function clearDisplay() {
    currentNumber = '';
    operator = null;
    resultEl.value = '';
}