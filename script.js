let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendToDisplay(value) {
    display.value += value;
}

function appendOperator(operator) {
    if (display.value !== '' && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
