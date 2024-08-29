document.getElementById('loginForm').addEventListener('submit', function(event) {
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    let valid = true;
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
    if (!valid) {
        event.preventDefault();
    }
});
