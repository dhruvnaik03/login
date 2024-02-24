document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Hardcoded email IDs and passwords (for demonstration purposes only)
    var users = [
        { email: 'user1@example.com', password: 'password1' },
        { email: 'user2@example.com', password: 'password2' },
        // Add more users if needed
    ];

    var found = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (found) {
        document.getElementById('message').textContent = 'Login successful!';
        // You can redirect the user to another page here if login is successful
    } else {
        document.getElementById('message').textContent = 'Invalid email or password. Please try again.';
    }
});
