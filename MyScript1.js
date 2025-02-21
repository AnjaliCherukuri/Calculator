let currentInput = '';  

// Function to append value (number or operator) to display
function appendToDisplay(value) {
    currentInput += value;  // Append the value to current input
    document.getElementById('display').value = currentInput;  
}
function calculateResult() {
    try {
        let result = eval(currentInput);  // Eval evaluates the string as a mathematical expression
        
        // Display the result
        document.getElementById('display').value = result;
        
        currentInput = result.toString();  
    } catch (e) {
        document.getElementById('display').value = "Error"; 
        currentInput = '';  // Reset current input if there's an error
    }
}

// Function to clear the display and reset the current input
function clearDisplay() {
    currentInput = '';  // Reset the current input
    document.getElementById('display').value = '';  // Clear the display
}
