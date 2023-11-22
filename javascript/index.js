// function that takes in input from user (ageInput) and variable days containing the expression for converting
// Display the result in the paragraph with id "result"
function ageToDays() {
    let ageInput = document.getElementById("age").value;
    let days = ageInput * 365.25;
    document.getElementById("answer").innerHTML = "Days: " + days.toFixed(2);
}
// Add an event listener to the button to calculate conversion
document.getElementById("btn1").addEventListener("click", ageToDays);



