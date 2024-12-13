
    // Add an event listener to toggle password visibility
    document.getElementById('showPassword').addEventListener('change', function () {
        const passwordField = document.getElementById('password');
        passwordField.type = this.checked ? 'text' : 'password';
    });

    function login() {
        // Get username and password input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate credentials
        if (username === 'Cyrus Barquilla' && password === 'IT_201') {
            // Redirect if valid
            window.location.href = "ILS.html";
        } else {
            // Show error if invalid
            alert('Invalid username or password. Please try again.');
        }
    }

