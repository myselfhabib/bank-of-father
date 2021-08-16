document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == "habib@gmail.com" && userPassword == "secret") {
        window.location.href = 'banking.html'
    }
});

