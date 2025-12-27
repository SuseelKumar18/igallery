# Ex.08 Design of Interactive Image Gallery
## Date: 26.12.2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
calc.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" class="display" readonly>

        <div class="buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn operator" data-value="/">/</button>

            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn operator" data-value="*">*</button>

            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn operator" data-value="-">-</button>

            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value=".">.</button>
            <button class="btn equal" id="equal">=</button>
            <button class="btn operator" data-value="+">+</button>

            <button class="btn clear" id="clear">C</button>
            <button class="btn backspace" id="backspace">⌫</button>
        </div>
    </div>

    <!-- Link to index.js (same folder) -->
    <script src="index.js"></script>
</body>
</html>


index.js

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


style.css

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1e1e2f, #2a2a4a);
}

.calculator {
    background: #222;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.6);
    width: 280px;
    border: 1px solid #333;
}

.display {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    padding: 0 15px;
    font-size: 1.5rem;
    border: none;
    border-radius: 10px;
    background: #111;
    color: #fff;
    text-align: right;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.3);
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
}

.btn {
    padding: 18px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: #333;
    color: #fff;
    transition: all 0.2s ease;
    user-select: none;
}

.btn:hover {
    background: #444;
    transform: translateY(-2px);
}

.btn:active {
    transform: scale(0.95);
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.operator {
    background: #ff9500;
}

.operator:hover {
    background: #e08700;
}

.equal {
    background: #34c759;
    grid-column: span 2;
}

.equal:hover {
    background: #2fa64b;
}

.clear {
    background: #ff3b30;
    grid-column: span 2;
}

.clear:hover {
    background: #e03329;
}

.backspace {
    background: #5856d6;
}

.backspace:hover {
    background: #4846c0;
}

```

## OUTPUT:

![alt text](<Screenshot 2025-12-27 123039.png>)
![alt text](<Screenshot 2025-12-27 123049.png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
