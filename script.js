let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
    display.classList.remove('output-mode');
    display.classList.add('input-mode');
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    if (display.classList.contains('output-mode')) {
        display.value = '';
        display.classList.remove('output-mode');
        display.classList.add('input-mode');
    }
    display.value += number;
}

function appendOperator(operator) {
    if (display.classList.contains('output-mode')) {
        display.classList.remove('output-mode');
        display.classList.add('input-mode');
    }
    display.value += ' ' + operator + ' ';
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculate() {
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
        display.classList.remove('input-mode');
        display.classList.add('output-mode');
    } catch (error) {
        display.value = 'Error';
        display.classList.remove('input-mode');
        display.classList.add('output-mode');
    }
}

function convertTemperature() {
    let tempInput = document.getElementById('temp-input').value;
    let tempUnit = document.getElementById('temp-unit').value;
    let tempOutput = document.getElementById('temp-output');

    if (tempInput === '') {
        tempOutput.textContent = 'Please enter a temperature';
        return;
    }

    let convertedTemp;
    if (tempUnit === 'C') {
        convertedTemp = (tempInput * 9/5) + 32;
        tempOutput.textContent = `${tempInput}°C is ${convertedTemp.toFixed(2)}°F`;
    } else {
        convertedTemp = (tempInput - 32) * 5/9;
        tempOutput.textContent = `${tempInput}°F is ${convertedTemp.toFixed(2)}°C`;
    }
}

function solveQuadratic() {
    let a = parseFloat(document.getElementById('a').value);

