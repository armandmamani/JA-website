const loginBtn = document.getElementById('LogInBtn');
const loginContainer = document.getElementById('login-container');
const loginMessage = document.getElementById('loginMessage');
console.log('Login script loaded');
function updateUIOnLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (isLoggedIn) {
        loginBtn.textContent = 'Log Out';
        loginContainer.style.display = 'none';
        document.querySelectorAll('.protected').forEach(el => el.style.display = 'block');
    } else {
        loginBtn.textContent = 'Log In';
        document.querySelectorAll('.protected').forEach(el => el.style.display = 'none');
    }
}

window.addEventListener('DOMContentLoaded', updateUIOnLoginStatus);

// Toggle behavior
loginBtn.addEventListener('click', function () {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    console.log('Login button clicked');

    if (isLoggedIn) {
        // Log out
        localStorage.removeItem('loggedIn');
        updateUIOnLoginStatus();
    } else {
        // Show login form
        loginContainer.style.display = 'block';
    }
});

// Form submit handler
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Login form submitted');
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const isValid = (username === 'admin' && password === '@Klaudio04');

    if (isValid) {
        localStorage.setItem('loggedIn', 'true');
        loginMessage.textContent = 'Login successful';
        loginMessage.style.color = 'green';

        updateUIOnLoginStatus();
    } else {
        loginMessage.textContent = 'Login not successful';
        setTimeout(() => {
            loginMessage.textContent = '';
            loginContainer.style.display = 'none';
        }, 5000);
    }
});
// Close login container if clicking outside
window.addEventListener('click', function (e) {
    const loginContainer = document.getElementById('login-container');
    const editContainer = document.getElementById('editFormContainer');
    const editBtn = document.getElementById('editBtn');
    const isClickInsideBtn = editBtn.contains(e.target) || e.target.id === 'LogInBtn';


    // Check if the login container is visible
    if (loginContainer.style.display === 'block') {
        const isClickInside = loginContainer.contains(e.target) || e.target.id === 'LogInBtn';

        if (!isClickInside && !isClickInsideBtn) {
            loginContainer.style.display = 'none';
        }
    }
    // Check if the login container is visible
    if (editContainer.style.display === 'block') {
        const EditisClickInside = editContainer.contains(e.target) || e.target.id === 'LogInBtn';

        if (!EditisClickInside && !isClickInsideBtn) {
            editContainer.style.display = 'none';
        }
    }

});
