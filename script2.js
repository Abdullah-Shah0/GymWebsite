document.getElementById('signupForm').addEventListener('submit', function(event) {
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';
    let valid = true;
    const username = document.getElementById('username').value;
    if (username.length < 3 || username.length > 20) {
        document.getElementById('usernameError').textContent = 'Username must be between 3 and 20 characters.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }
    if (!valid) {
        event.preventDefault();
    }
});
