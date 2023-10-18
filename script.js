document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    console.log('Hello from script.js!');

    // Function to generate a random number
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    // Get references to button and display elements
    const button = document.getElementById('randomNumberButton');
    const display = document.getElementById('randomNumberDisplay');

    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Generate a random number and display it
        const randomNumber = generateRandomNumber();
        display.textContent = `Random Number: ${randomNumber}`;
    });
});
