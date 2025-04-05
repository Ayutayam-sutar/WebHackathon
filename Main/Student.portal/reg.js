document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user ID and password values
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this as needed)
    if (userId === '' || password === '') {
        displayMessage('Please fill in all fields.', 'red');
        return;
    }

    // Here you can add code to send the data to a server or save it locally
    // For demonstration, we'll just display a success message
    displayMessage('Registration successful!', 'green');

    // Clear the form
    document.getElementById('registrationForm').reset();
});

function displayMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}