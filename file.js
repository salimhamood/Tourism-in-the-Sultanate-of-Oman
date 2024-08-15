// JavaScript code to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Perform form validation (You can add more validation rules as needed)
    if (!fullName || !email || !phoneNumber) {
        alert('Please fill in all fields.');
        return;
    }

    // Display registration information
    alert('Registration successful!\n\nFull Name: ' + fullName + '\nEmail: ' + email + '\nPhone Number: ' + phoneNumber);


    // Reset form after successful submission
    document.getElementById('registrationForm').reset();
});
