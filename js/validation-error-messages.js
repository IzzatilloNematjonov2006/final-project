document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        if (!nameField.value) {
            alert('Please provide your name.');
        }
        if (!emailField.value) {
            alert('Please provide an email address.');
        } else if (!emailField.validity.valid) {
            alert('Please enter a valid email address (e.g., example@domain.com).');
        }
        if (!messageField.value) {
            alert('Please enter your message.');
        }
        return false;
    }
});
