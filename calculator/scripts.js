// Set live time and date at top of watch display
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}

function setDate() {
    const dateDisplay = document.getElementById('date')
    const date = new Date()
    const dateFormatted = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
    dateDisplay.textContent = dateFormatted
}


// Calculator functions
function add(x,  y) {
    return parseFloat((x + y).toFixed(3))
}

function subtract(x, y) {
    return parseFloat((x - y).toFixed(3))
}

function multiply(x, y) {
    return parseFloat((x * y).toFixed(3))
}

function divide(x, y) {
    return parseFloat((x / y).toFixed(3))
}

function operate(operator, x, y) {
    switch(operator) {
        case "+":
            return add(x, y)
        case "-":
            return subtract(x, y)
        case "*":
            return multiply(x, y)
        case "/":
            return divide(x, y)
    }
}

// Event listener for button presses
const buttonGrid = document.querySelector('.bottom')
const calculatorDisplay = document.getElementById('calc')
const previewDisplay = document.getElementById('preview')

// Since all operations will work on only 2 numbers at a time per specifications, we'll need 2 variables to store those numbers
// Because multi-digit numbers are inputted via consecutive button presses, we need to store them as strings and concatenate
let x = ""
let y = ""

// Storing the most recently pressed operator in a variable will help as well
let op = ""

// Streamline our code by creating reusable functions to update the display areas
const updateCalculatorDisplay = (v) => calculatorDisplay.textContent = v
const updatePreviewDisplay = (v) => previewDisplay.textContent = v

buttonGrid.addEventListener('click', function(e) {
    if (e.target.classList.contains('button')) {
        
        // Clear everything if 'clear' button is pressed
        if (e.target.id === "clear") {
            x = ""
            y = ""
            op = ""
            updateCalculatorDisplay('')
            updatePreviewDisplay('')
        }

        // Handle number input
        if (e.target.classList.contains('number-button')) {

            // If the operator variable is empty, we know we're dealing with the first number
            if (!op) {
                x += e.target.id
                calculatorDisplay.textContent += e.target.id
            }

            // Otherwise we're dealing with the second number
            else {
                y += e.target.id
                calculatorDisplay.textContent += e.target.id
            }
            
        }

        // Handle operator input
        if (e.target.classList.contains('operator-button')) {

            // If the first button press is an operator, initialize the calculation with 0 as the first number
            if (!x) {
                x = 0
                op = e.target.id
                updatePreviewDisplay(x + op)
                updateCalculatorDisplay('')
            }

            // If operator buttons are pressed in sequence before we have two number values, update the operator to the most recent button pressed
            if (x && !y) {
                op = e.target.id
                updatePreviewDisplay(x + op)
                updateCalculatorDisplay('')
            }

            // Update the preview window if user is chaining operations
            else {
                if (op === "/" && y === "0") throwError()
                else {
                    x = operate(op, Number(x), Number(y))
                    y = ""
                    op = e.target.id
                    updatePreviewDisplay(x + op)
                    updateCalculatorDisplay('')
                }
            }
        }

        // Handle equals sign
        if (e.target.classList.contains('equals-button')) {

            // Output the current number if no second number has been entered
            if (y === "") {
                updatePreviewDisplay('')
                updateCalculatorDisplay(x)
            }

            else {
                if (op === "/" && y === "0") throwError()
                else {
                    updatePreviewDisplay(x + op + y)
                    x = operate(op, Number(x), Number(y))
                    y = ""
                    if (x > 999999999) {
                        updateCalculatorDisplay(x.toExponential(3))
                    }
                    else {
                        updateCalculatorDisplay(x)
                    }
                }
            }
        }

        
        
    }
}) 

function throwError() {
    updatePreviewDisplay("NICE TRY")
    updateCalculatorDisplay("NOPE")
}