function calculate() {
    // Retrieve input values
    var capital = parseFloat(document.getElementById("firstInput").value);
    var years = parseFloat(document.getElementById("secondInput").value);
    var interest = parseFloat(document.getElementById("thirdInput").value);

    // Perform calculation
    var calculatedResult = calculateResult(capital, years, interest);

    // Display result
    document.getElementById("calculationResult").textContent =
        calculatedResult.toFixed(2); // Adjust decimal places as needed
}

function calculateResult(capital, years, interest) {
    // Your calculation logic goes here
    // This is just a basic example; replace with your calculation
    var result = capital * (1 + interest / 100) ** years;
    return result;
}
