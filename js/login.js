document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email == 'temp@gmail.com' && password == 'password') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid User Name or Password! Please try again!!');
    }

    emailField.value = '';
    passwordField.value = '';
});