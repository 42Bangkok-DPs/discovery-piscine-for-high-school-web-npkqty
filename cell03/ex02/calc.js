// Function to perform the calculation
function calculate() {
    const leftValue = parseInt(document.getElementById("leftOperand").value);
    const operator = document.getElementById("operator").value;
    const rightValue = parseInt(document.getElementById("rightOperand").value);

    // Validate inputs
    if (isNaN(leftValue) || isNaN(rightValue) || leftValue < 0 || rightValue < 0) {
        alert("Error :(");
        return;
    }

    let result;

    // Perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = leftValue + rightValue;
            break;
        case '-':
            result = leftValue - rightValue;
            break;
        case '*':
            result = leftValue * rightValue;
            break;
        case '/':
            if (rightValue === 0) {
                alert("It’s over 9000!");
                console.log("Attempted division by zero");
                return;
            }
            result = leftValue / rightValue;
            break;
        case '%':
            if (rightValue === 0) {
                alert("It’s over 9000!");
                console.log("Attempted modulo by zero");
                return;
            }
            result = leftValue % rightValue;
            break;
        default:
            alert("Error :(");
            return;
    }

    // Display the result
    alert("Result: " + result);
    console.log("Result: " + result);
}

// Function to show the reminder alert every 30 seconds
function showReminder() {
    setInterval(() => {
        alert("Please, use me...");
    }, 30000);
}

// Start the reminder when the page loads
window.onload = showReminder;
