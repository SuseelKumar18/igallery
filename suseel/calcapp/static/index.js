const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');
const equalBtn = document.getElementById('equal');

let currentInput = '';

buttons.forEach(btn => {
    const value = btn.getAttribute('data-value');
    if (!value) return;

    btn.addEventListener('click', () => {
        currentInput += value;
        display.value = currentInput;
    });
});

clearBtn.addEventListener('click', () => {
    currentInput = '';
    display.value = '';
});

backspaceBtn.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
});

equalBtn.addEventListener('click', () => {
    if (!currentInput) return;
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = String(result);
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
});
