


document.getElementById('LogInBtn').addEventListener("click", function () {
    const loginContainer = document.getElementById('login-container');

    loginContainer.style.display = 'block' // Show login container on page load
});
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload on submit

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const loginMessage = document.getElementById('loginMessage');
  const loginContainer = document.getElementById('login-container');

  // Replace this with your actual credentials check
  const isValid = (username === 'admin' && password === '@Klaudio04');

  if (isValid) {
    sessionStorage.setItem('loggedIn', 'true');
    location.reload(); // optionally reload to update page state
  } else {
    // Hide form, show message
    loginMessage.textContent = 'Login not successful';

    // Show message temporarily for 5 seconds
    setTimeout(() => {
      loginMessage.textContent = '';
      loginContainer.style.display = 'none';
    }, 5000);
  }
});
