let currentInput = '';  // To hold the current input value

// Function to append value (number or operator) to display
function appendToDisplay(value) {
    currentInput += value;  // Append the value to current input
    document.getElementById('display').value = currentInput;  // Update the display
}

// Function to calculate the result of the entire expression
function calculateResult() {
    try {
        // Use eval to evaluate the entire mathematical expression
        let result = eval(currentInput);  // Eval evaluates the string as a mathematical expression
        
        // Display the result
        document.getElementById('display').value = result;
        
        // Reset the current input for the next calculation
        currentInput = result.toString();  
    } catch (e) {
        document.getElementById('display').value = "Error";  // Handle invalid expression
        currentInput = '';  // Reset current input if there's an error
    }
}

// Function to clear the display and reset the current input
function clearDisplay() {
    currentInput = '';  // Reset the current input
    document.getElementById('display').value = '';  // Clear the display
}
